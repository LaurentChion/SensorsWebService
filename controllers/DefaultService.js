'use strict';
var mongoose   = require("mongoose");
let Sensor = require("../model/Sensor");
let Measure = require("../model/Measure");

exports.sensorIdGET = function(args, res, next) {

  const sensors = mongoose.models.Measure.find({sensor_id: args.id.value},
    (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'application/json');

      console.log(JSON.stringify(data));
      res.end(JSON.stringify(data));
    }
  );
}

exports.sensorsGET = function(args, res, next) {

  const sensors = mongoose.models.Sensor.find(null,
    (err, data) => {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  );
}
