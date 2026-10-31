#!/usr/bin/env bash
# Project start script: build static output inside PROJECT_DIR and serve it on PORT (default 3000).
set -euo pipefail

T() { /usr/bin/time -p "$@"; }

cd "${PROJECT_DIR:?PROJECT_DIR is required}"

# --- build: static output lives inside PROJECT_DIR (source stays here too) ---
DIST_DIR="$PROJECT_DIR/dist"
T mkdir -p "$DIST_DIR"

# The kraken game is a single static HTML page. Build it as dist/index.html so the
# static deployment has a valid entry point; rebuild only when the source changed.
if [[ ! -f "$DIST_DIR/index.html" || kraken-game.html -nt "$DIST_DIR/index.html" ]]; then
  T cp kraken-game.html "$DIST_DIR/index.html"
fi

# --- install dependencies when a package.json exists (none for this static project) ---
if T test -f package.json; then
  T npm install --no-audit --no-fund
fi

# --- worker metadata only, kept outside the source tree ---
T mkdir -p "$OPENCODE_WEB_DIR"
T node -e '
const fs = require("fs");
const project = process.env.PROJECT_DIR;
const directory = project + "/dist";
fs.writeFileSync(
  process.env.OPENCODE_WEB_DIR + "/deployment-output.json",
  JSON.stringify({ project, directory }, null, 2),
);
'

# --- serve in the foreground on PORT (default 3000) ---
PORT="${PORT:-3000}"
export PORT
cd "$DIST_DIR"
/usr/bin/time -p python3 -m http.server "$PORT" --bind 0.0.0.0
