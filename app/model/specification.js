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
    type: String
  },
  operatingSystem: {
    type: String
  },
  phonetype: {
    type: String
  },
  slots:{
    type:String
  },
  simSlot: [
    {
      sim: {
        simType: String,
        simNumber:Number,
        isVolTE: Boolean,
        size: String,
        network: {
          fourG: {
            type: Boolean
          },
          threeG: {
            type: Boolean
          },
          twoG: {
            type: Boolean
          }
        }
      }
    }
  ],
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
  bands:[{
    sim: {
      num:Number,
      fG:String,
      thG:String,
      TwG:String,  
    }
  }
   
  ],
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