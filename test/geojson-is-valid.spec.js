'use strict';

require('chai').should()
var geojsonIsValid = require('../index')

var validFeature = {
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

var validCollection = {
  type: 'FeatureCollection',
  features: [ validFeature ]
}

describe('geojson is valid module', function () {

  it('should return false if geojson argument is empty', function () {
    geojsonIsValid().should.equal(false)
    geojsonIsValid(null).should.equal(false)
    geojsonIsValid(undefined).should.equal(false)
  })

  it('should return false if geojson is invalid type', function () {
    geojsonIsValid('').should.equal(false)
    geojsonIsValid([]).should.equal(false)
    geojsonIsValid(1).should.equal(false)
    geojsonIsValid(0.5).should.equal(false)
  })

  it('should return false if geojson is an invalid object', function () {
    geojsonIsValid({ type: 'Feature' }).should.equal(false)
  })

  it('should return true if geojson is valid', function () {
    geojsonIsValid(validCollection).should.equal(true)
    geojsonIsValid(validFeature).should.equal(true)
  })

})
