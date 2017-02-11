'use strict';
var mongoose   = require("mongoose");
let Sensor = require("../model/Sensor");
let Measure = require("../model/Measure");

exports.sensorIdGET = function(args, res, next) {
  let dateDebut = args.date.value;
  let dateFin;
  let time = args.time.value;
  let timeIsDefine = false;

  if( typeof dateDebut === 'undefined') {
    dateDebut = new Date();
  }
  else {
    dateFin = new Date(dateDebut);
    dateDebut = new Date(dateDebut);

    if (typeof time !== 'undefined') {
      if (time === 'day') {
        timeIsDefine = true;
        dateFin.setDate(dateFin.getDate() + 1);
      }
      else if (time === 'hour'){
        timeIsDefine = true;
        dateFin.setHours(dateFin.getHours() + 1);
      }
      else if (time === 'week'){
        timeIsDefine = true;
        dateFin.setDate(dateFin.getDate() + 7);
      }
    }
  }

  if (timeIsDefine) {
    mongoose.models.Measure.find(
      {
        sensor_id: args.id.value,
        date: {
          $gt: dateDebut,
          $lt: dateFin,
        },
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      }
    );
  }
  else {
    mongoose.models.Measure.find(
      {
        sensor_id: args.id.value,
        date: { $gt: dateDebut },
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      }
    );
  }
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
