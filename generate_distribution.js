var fs = require('fs');
var UglifyJS = require('uglify-js');
var Ships = require('./ships');
var Modules = require('./modules');
var Modifications = require('./modifications');
var ShipSlots = require('./ships/ship-slots.json');
var payload = { Ships: Ships, Modules: Modules, Modifications: Modifications, ShipSlots: ShipSlots };
var exportString = JSON.stringify(payload, null, '\t');
var ast = UglifyJS.parse(['module.exports = ', JSON.stringify(payload), ';'].join(''));
var code = ast.print_to_string({beautify: true, indent_level: 2});

if (!fs.existsSync('./dist')){
    fs.mkdirSync('./dist');
}

fs.open('./dist/index.js', 'w', function() {
    fs.writeFile('./dist/index.js', code, function(err) {});
});

fs.open('./dist/index.json', 'w', function() {
    fs.writeFile('./dist/index.json', exportString, function(err) {});
});
