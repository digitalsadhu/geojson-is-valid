Geojson is valid
================

[![NPM](https://nodei.co/npm/jinn.png?compact=true)](https://nodei.co/npm/geojson-is-valid/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

This module provides a very light wrapper around the work the file folks at
mapbox have been doing with [geojsonhint](https://www.npmjs.org/package/geojsonhint)
to provide simple boolean checks on geojson objects

## Usage

```
npm install --save geojson-is-valid
```

```js
var isValid = require('geojson-is-valid')

var validGeojsonFeature = {
  type: 'Feature',
  id: 'way/4243736',
  properties: {
    highway: 'trunk'
  },
  geometry: {
    type: 'LineString',
    coordinates: [
      [
        172.5498622,
        -43.4932694
      ],
      [
        172.5498622,
        -43.4932694
      ]
    ]
  }
}

var validGeojsonCollection = {
  type: 'FeatureCollection',
  features: [ validFeature ]
}

isValid(validGeojsonFeature) //true
isValid(validGeojsonCollection) //true
isValid('something else') //false
```
