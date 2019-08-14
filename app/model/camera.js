const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CameraSchema = new Schema({
    resolution:{
        type: String,
        // required: true
    },
    isAutoFocus:{
        type: Boolean,
        // required: true
    },
    physicalAperture:{
        type: String,
        // required: true
    },
    flash:{
        type: Boolean,
        // required: true
    },
    imageResolution:{
        type: Number,
        // required: true
    },
    videoRecording:{
        type: String,
        // required: true
    },backResolution: {
        type: Number
      },
      sensor: {
        type: String
      },
      autoFocus: {
        type: String,
        default: "Phase Detection autofocus"
      },
      flash: {
        type: String,
        default: "LED Flash"
      },
      physicalAperture: {
        type: String
      },
      imageResolution: {
        type: String
      },
      setting: {
        type: String,
        default: "Exposure compensation, ISO control"
      },
      mode: {
        type: String,
        default: "Continuos Shooting, High Dynamic Range mode (HDR), Burst mode"
      },
      cameraFeatures: {
        type: String,
        default: "Digital Zoom, Auto Flash, Face detection, Touch to focus"
      },
      videoRecoring: {
        type: String
      }
})

const Camera = mongoose.model('Camera', CameraSchema)

module.exports = Camera