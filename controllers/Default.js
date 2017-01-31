'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.sensorIdGET = function sensorIdGET (req, res, next) {
  Default.sensorIdGET(req.swagger.params, res, next);
};

module.exports.sensorsGET = function sensorsGET (req, res, next) {
  Default.sensorsGET(req.swagger.params, res, next);
};
