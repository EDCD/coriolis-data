var m = require('./dist');
console.log('fh name:', m.Modules.internal.fh[0].ukName);
console.log('fhmkii exists:', m.Modules.internal.fhmkii ? 'yes' : 'no');
if (m.Modules.internal.fhmkii) {
  console.log('fhmkii name:', m.Modules.internal.fhmkii[0].ukName);
  console.log('fhmkii count:', m.Modules.internal.fhmkii.length);
}
console.log('explorer_nx mkII:', m.Ships.explorer_nx.properties.vesselHangarsMkII ? 'yes' : 'no');
console.log('panthermkii mkII:', m.Ships.panthermkii.properties.vesselHangarsMkII ? 'yes' : 'no');
console.log('type_11 mkII:', m.Ships.type_11_prospector.properties.vesselHangarsMkII ? 'yes' : 'no');
console.log('anaconda mkII:', m.Ships.anaconda.properties.vesselHangarsMkII ? 'yes' : 'no');
