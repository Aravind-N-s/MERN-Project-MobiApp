const mongoose = require('mongoose')
const Product = require('./product')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
  product:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
  launchDate: {
    type: Date
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand"
  },
  model: {
    type: String
  },
  operatingSystem: {
    type: String,
    default: "andriod 9.0"
  },
  phonetype: {
    type: String,
    default: "SmartPhone"
  },
  simSlot: [
    {
      sim: {
        type: String,
        number: Number,
        isVolTE: Boolean,
        size: String,
        network: {
          type: Schema.Types.ObjectId,
          ref: "Network"
        }
      }
    }
  ],
  height: {
    type: Number
  },
  width: {
    type: Number
  },
  thickness: {
    type: Number
  },
  weight: {
    type: Number
  },
  colors: [
    {
      type: String
    }
  ],
  waterProof: {
    type: String
  },
  screenSize: {
    type: Number
  },
  screenResolution: {
    type: Number
  },
  aspectRatio: {
    type: Number
  },
  pixelDensity: {
    type: Number
  },
  displayType: {
    type: String
  },
  screenProtection: {
    type: String
  },
  touchScreen: {
    type: String
  },
  screenToBodyRatio: {
    type: Number
  },
  chipset: {
    type: String
  },
  processor: {
    type: String
  },
  architecture: {
    type: Number,
    default: 64
  },
  ram: {
    type: Number
  },
  graphics: {
    type: String
  },
  internalMemory: {
    type: Number,
    default: 64
  },
  Expandable: {
    type: Number,
    default: false
  },
  isOtgSupport: {
    type: Boolean,
    default: false
  },
  frontResolution: {
    type: Number
  },
  frontPhysicalAperture: {
    type: String
  },
  frontVideoRecoring: {
    type: String
  },
  backResolution: {
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
    type: Number
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
  },
  batteryCapacity: {
    type: Number
  },
  batteryType: {
    type: String,
    default: "Li-Polymer"
  },
  replaceable: {
    type: Boolean,
    default: false
  },
  batteryLife: {
    type: String,
    default: "Up to 251 Hours(2G)"
  },
  suport: {
    type: String
  },
  wifiSupport: {
    type: String,
    default: "2.4 only"
  },
  features: {
    type: String,
    default: "mobile hotspot"
  },
  bluetooth: {
    type: String,
    default: "5.0"
  },
  gps: {
    type: String,
    default: "with A-GPS, Glonass"
  },
  connectivity: {
    type: String,
    default: "	Mass storage device, USB charging"
  },
  loudSpeaker: {
    type: String,
    default: "Yes"
  },
  audioJack: {
    type: String,
    default: "3.5mm"
  },
  isFingerPrintSensor: {
    type: Boolean,
    default: false
  },
  fingerPrintSensorPosition: {
    type: String,
    default: "Rear"
  },
  isQuickCharging: {
    type: Boolean,
    default: false
  },
  otherSensors: {
    type: String,
    default: "Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope"
  }
})

const Specification = mongoose.model('Specification', SpecificationSchema)

module.exports = Specification