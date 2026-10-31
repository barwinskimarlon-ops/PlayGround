export const UPGRADES = [
  {
    id: "ap",
    cat: "WEAPON",
    name: "AP ROUNDS",
    icon: "30",
    desc: "Dense tungsten penetrators punch clean through kaiju hide.",
    delta: "+30% VULCAN DAMAGE",
    apply(player) {
      player.stats.damage *= 1.3;
    },
  },
  {
    id: "feed",
    cat: "WEAPON",
    name: "DUAL FEED",
    icon: "II",
    desc: "Twin-linked ammunition feeds double the cannon's appetite.",
    delta: "+22% FIRE RATE",
    apply(player) {
      player.stats.fireInterval *= 0.82;
    },
  },
  {
    id: "hellfire",
    cat: "WEAPON",
    name: "HELLFIRE POD",
    icon: "M",
    desc: "A third launch rail and a heavier anti-titan warhead.",
    delta: "+1 MISSILE · +25% WARHEAD",
    apply(player) {
      player.stats.missileCap += 1;
      player.stats.missileDamage *= 1.25;
      player.missiles += 1;
    },
  },
  {
    id: "seek",
    cat: "WEAPON",
    name: "SMART SEEK",
    icon: "⌁",
    desc: "Upgraded guidance logic snaps missiles onto evasive air targets.",
    delta: "+70% MISSILE TURN RATE",
    apply(player) {
      player.stats.missileTurn *= 1.7;
    },
  },
  {
    id: "plating",
    cat: "AIRFRAME",
    name: "REACTIVE PLATING",
    icon: "◇",
    desc: "Layered ceramic tiles shrug off plasma impacts and debris.",
    delta: "+30 MAX HULL · REPAIR 30",
    apply(player) {
      player.stats.maxHull += 30;
      player.maxHull = player.stats.maxHull;
      player.heal(30);
    },
  },
  {
    id: "nano",
    cat: "AIRFRAME",
    name: "NANO-FORGE",
    icon: "✚",
    desc: "Combat nanites cannibalize kaiju tissue to patch the airframe.",
    delta: "+4 HULL PER KILL",
    apply(player) {
      player.stats.repairPerKill += 4;
      player.heal(35);
    },
  },
  {
    id: "turbine",
    cat: "AIRFRAME",
    name: "TURBINE OVERDRIVE",
    icon: "⟳",
    desc: "The rotor gearbox is retuned far past its civilian redline.",
    delta: "+17% ROTOR SPEED",
    apply(player) {
      player.stats.speed *= 1.17;
    },
  },
  {
    id: "repair",
    cat: "AIRFRAME",
    name: "FIELD REFIT",
    icon: "＋",
    desc: "Sky Control drops a full repair pallet and spare armor sections.",
    delta: "REPAIR 55 · +10 MAX HULL",
    apply(player) {
      player.stats.maxHull += 10;
      player.maxHull = player.stats.maxHull;
      player.heal(55);
    },
  },
  {
    id: "coolant",
    cat: "SYSTEM",
    name: "CRYO LOOP",
    icon: "❄",
    desc: "Sub-zero coolant races through the barrel shroud.",
    delta: "+55% COOLING · -10% HEAT",
    apply(player) {
      player.stats.coolRate *= 1.55;
      player.stats.heatPerShot *= 0.9;
    },
  },
  {
    id: "targeting",
    cat: "SYSTEM",
    name: "TARGETING AI",
    icon: "◎",
    desc: "Predictive optics find fractures in armor before you do.",
    delta: "+13% CRITICAL CHANCE",
    apply(player) {
      player.stats.critChance += 0.13;
    },
  },
  {
    id: "autorepair",
    cat: "SYSTEM",
    name: "AUTO-REPAIR",
    icon: "↻",
    desc: "Damage-control routines seal micro-fractures during lulls.",
    delta: "+1.6 HULL / SEC OUT OF COMBAT",
    apply(player) {
      player.stats.regen += 1.6;
      player.heal(10);
    },
  },
  {
    id: "heat",
    cat: "SYSTEM",
    name: "HEAT SINKS",
    icon: "≋",
    desc: "Vented barrel shrouds dump waste heat into the rotor wash.",
    delta: "-18% HEAT BUILD-UP",
    apply(player) {
      player.stats.heatPerShot *= 0.82;
    },
  },
];

const byCat = {
  WEAPON: UPGRADES.filter((u) => u.cat === "WEAPON"),
  AIRFRAME: UPGRADES.filter((u) => u.cat === "AIRFRAME"),
  SYSTEM: UPGRADES.filter((u) => u.cat === "SYSTEM"),
};

export function getUpgradeChoices() {
  const cats = ["WEAPON", "AIRFRAME", "SYSTEM"];
  return cats.map((cat) => {
    const pool = byCat[cat];
    return pool[Math.floor(Math.random() * pool.length)];
  });
}

export function upgradeDisplayName(id) {
  const u = UPGRADES.find((x) => x.id === id);
  return u ? u.name : id.toUpperCase();
}
