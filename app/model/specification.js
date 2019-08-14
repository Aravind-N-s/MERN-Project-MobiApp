const mongoose = require('mongoose')
const Product = require('./product')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  launchDate: {
    type: Date
  },
  brand: {
    type: Schema.Types.ObjectId
  },
  operatingSystem: {
    type: String
  },
  phonetype: {
    type: Boolean
  },
  simSlot: [{
    simType: {
      type:String
    },
    isVolTE: {
      type:Boolean
    },
    size: {
      type:String
    },
    fourG: {
      type: Boolean
    },
    threeG: {
      type: Boolean
    },
    twoG: {
      type: Boolean
    }
  }],
  height: {
    type: String
  },
  width: {
    type: String
  },
  thickness: {
    type: String
  },
  weight: {
    type: String
  },
  waterProof: {
    type: String
  },
  screenSize: {
    type: Number
  },
  screenResolution: {
    type: String
  },
  aspectRatio: {
    type: Number
  },
  pixelDensity: {
    type: String
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
    type: String
  },
  ExpandableMemory: {
    type: String
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
  batteryCapacity: {
    type: String
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
    hours: {
      type:Number
    },
    for:{
      type:String
    }
  },
  networkSupport: {
    type: String
  },
  isVolTE:{
    type: Boolean,
    default:false,
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
    default: "Glonass"
  },
  usbConnectivity: {
    type: String,
    default: "Mass storage device, USB charging"
  },
  isUSBC:{
    type:Boolean,
    default:false
  },
  fmRadio:{
    type:Boolean,
    default:false
  },
  loudSpeaker: {
    type: Boolean,
    default: false
  },
  audioJack: {
    type: String,
    default: "3.5mm"
  },
  audioFeature:{
    type:String,
    defalut: "Dolby Atmos"
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
});

const Specification = mongoose.model('Specification', SpecificationSchema)

module.exports = Specification