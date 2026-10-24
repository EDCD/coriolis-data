#!/usr/bin/env node
/**
 * verify-ship-slots.js
 *
 * Cross-checks ship-slots.json against the individual ships/<id>.json source
 * files, using the SAME key resolution the app uses (lowercased Frontier name ->
 * coriolis id, via SHIP_FD_NAME_TO_CORIOLIS_NAME). For every ship it compares,
 * for internal / hardpoints / standard: slot count and per-slot class ordering.
 */
const fs = require('fs');
const path = require('path');

const shipSlots = JSON.parse(fs.readFileSync(path.join(__dirname, 'ships', 'ship-slots.json'), 'utf8'));

// Authoritative FD-name -> coriolis-id map (kept in sync with
// coriolis/src/app/utils/CompanionApiUtils.js SHIP_FD_NAME_TO_CORIOLIS_NAME).
const FD_NAME_TO_ID = {
  Adder: 'adder', Anaconda: 'anaconda', AnacondaMkII: 'anaconda2', Asp: 'asp',
  Asp_Scout: 'asp_scout', BelugaLiner: 'beluga', Explorer_NX: 'explorer_nx',
  CobraMkIII: 'cobra_mk_iii', CobraMkIV: 'cobra_mk_iv', CobraMkV: 'cobramkv',
  Corsair: 'imperial_corsair', Cutter: 'imperial_cutter',
  DiamondBackXL: 'diamondback_explorer', DiamondBack: 'diamondback', Dolphin: 'dolphin',
  Eagle: 'eagle', Empire_Courier: 'imperial_courier', Empire_Eagle: 'imperial_eagle',
  Empire_Trader: 'imperial_clipper', Federation_Corvette: 'federal_corvette',
  Federation_Dropship: 'federal_dropship', Federation_Dropship_MkII: 'federal_assault_ship',
  Federation_Gunship: 'federal_gunship', FerDeLance: 'fer_de_lance', Hauler: 'hauler',
  Independant_Trader: 'keelback', smallcombat01_nx: 'kestrel', Krait_MkII: 'krait_mkii',
  Mamba: 'mamba', Mandalay: 'mandalay', mediumtransport01: 'lynx_highliner',
  Krait_Light: 'krait_phantom', Orca: 'orca', PantherMKII: 'panthermkii', Python: 'python',
  Python_nx: 'python_nx', SideWinder: 'sidewinder', Type6: 'type_6_transporter',
  Type7: 'type_7_transport', Type8: 'type_8_transport', Type9: 'type_9_heavy',
  Type9_Military: 'type_10_defender', LakonMiner: 'type_11_prospector',
  TypeX: 'alliance_chieftain', TypeX_2: 'alliance_crusader', TypeX_3: 'alliance_challenger',
  Viper: 'viper', Viper_MkIV: 'viper_mk_iv', Vulture: 'vulture',
};
// lowercased FD name -> id (matches the app resolver's _idToSsKey inversion)
const KEY_TO_ID = {};
for (const fd in FD_NAME_TO_ID) KEY_TO_ID[fd.toLowerCase()] = FD_NAME_TO_ID[fd];

const shipsDir = path.join(__dirname, 'ships');
const ssClasses = (arr) => arr.map((s) => s.class);
const dataClasses = (arr) => arr.map((s) => (typeof s === 'object' ? s.class : s));

// Build id -> {file, data} from the actual top-level id inside each ship file
// (the FILENAME is not always the id, e.g. cobra_mk_v.json contains "cobramkv").
const idToData = {};
for (const f of fs.readdirSync(shipsDir)) {
  if (!f.endsWith('.json') || f === 'ship-slots.json') continue;
  const json = JSON.parse(fs.readFileSync(path.join(shipsDir, f), 'utf8'));
  const id = Object.keys(json)[0];
  idToData[id] = { file: f, data: json[id] };
}

let problems = 0;
const ssKeys = Object.keys(shipSlots).filter((k) => k !== '_ShipSlots');

for (const key of ssKeys) {
  // a ship-slots key resolves if it equals a coriolis id directly OR via the map
  const id = idToData[key] ? key : KEY_TO_ID[key];
  if (!id || !idToData[id]) {
    console.log(`UNRESOLVED ship-slots key "${key}" (no matching ship id)`);
    problems++;
    continue;
  }
  const data = idToData[id].data;
  const ss = shipSlots[key].slots;

  for (const group of ['internal', 'hardpoints', 'standard']) {
    if (group === 'standard') {
      const core = (ss.standard || []).filter((s) => !['Armour', 'CargoHatch'].includes(s.name));
      const ssC = core.map((s) => s.class);
      const dC = dataClasses(data.slots.standard || []);
      if (JSON.stringify(ssC) !== JSON.stringify(dC)) {
        console.log(`STANDARD MISMATCH ${id}: ship-slots=${ssC} data=${dC}`);
        problems++;
      }
      continue;
    }
    const a = ssClasses(ss[group] || []);
    const b = dataClasses(data.slots[group] || []);
    if (a.length !== b.length) {
      console.log(`COUNT MISMATCH ${id} ${group}: ship-slots=${a.length} (${a}) data=${b.length} (${b})`);
      problems++;
    } else if (JSON.stringify(a) !== JSON.stringify(b)) {
      console.log(`ORDER MISMATCH ${id} ${group}: ship-slots=${a} data=${b}`);
      problems++;
    }
  }
}

// data ships with no ship-slots entry
const mappedIds = new Set(ssKeys.map((k) => (idToData[k] ? k : KEY_TO_ID[k])));
for (const id of Object.keys(idToData)) {
  if (!mappedIds.has(id)) {
    console.log(`NO SHIP-SLOTS ENTRY for data ship "${id}" (file ${idToData[id].file})`);
    problems++;
  }
}

console.log(`\n${problems === 0 ? 'OK - ship-slots.json matches all ship files' : 'PROBLEMS=' + problems} (${ssKeys.length} entries checked)`);
process.exit(problems === 0 ? 0 : 1);
