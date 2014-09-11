'use strict';

var geojsonhint = require('geojsonhint')

module.exports = function (geojson) {
  if (geojsonhint.hint(JSON.stringify(geojson)).length === 0) return true
  return false
}
