#!/usr/bin/env bash
# Capture desktop and mobile screenshots of a rendered preview URL.
#
# Requires: CAPTURE_URL (page to render), CAPTURE_DIR (output dir, outside source).
# Writes:   CAPTURE_DIR/final-desktop.png  CAPTURE_DIR/final-mobile.png
# Exits:    75 for temporary navigation/browser infrastructure failures,
#           1 for script or rendering defects.
# Leaves the application server running; closes its own browser.
set -euo pipefail

T() { /usr/bin/time -p "$@"; }

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"
: "${RUNTIME_DIR:?RUNTIME_DIR is required}"

# Capture output lives outside the project source tree.
T mkdir -p "$CAPTURE_DIR"

# Use the shared worker display (Xvfb) so the browser can render.
: "${DISPLAY:=:$(cat "$HOME/.local/share/omgithub-playwright/display" 2>/dev/null || echo 0)}"
export DISPLAY

# Canonical capture: opens the URL, waits for rendered content, captures
# final-desktop.png and final-mobile.png, then closes its own browser.
T node "${RUNTIME_DIR}/scripts/default-capture.mjs"
