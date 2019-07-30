import React from "react";

const network = [
  {id:1, name:"2G"},
  {id:2, name:"3G"},
  {id:4, name:"4G"}
]
const fGbands = [
  { id: 1, band: "LTE 850 (5)" },
  { id: 2, band: "LTE 1800 (3)" },
  { id: 3, band: "LTE 2300 (40)" },
  { id: 4, band: "LTE 2500 (41)" }
]
const tGbands = [
  { id: 1, band: "UMTS 900" },
  { id: 2, band: "UMTS 2100" }
]
const twGbands = [
    { id: 1, band: "GSM 900" },
  { id: 2, band: "GSM 1800" }
]
const wifi = [
  { id: 1, name: "Wi-Fi-802.11a" },
  { id: 2, name: "Wi-Fi-802.11b" },
  {id:3, name:"Wi-Fi-802.11g"},
  {id:4, name:"Wi-Fi-802.11n"}
];
const bluetooth = [
  { id: 1, version: "Bluetooth 1.x" },
  { id: 2, version: "Bluetooth 2.x" },
  { id: 3, version: "Bluetooth 3.x" },
  { id: 4, version: "Bluetooth 4.x" },
  { id: 5, version: "Bluetooth 5.x" }
];
const gps = [
  { id: 1, name: "AGPS" },
  { id: 2, name: "BeiDou" },
  { id: 3, name: "GLONASS" }
];
const usbC = [
  { id: 1, name: "Mass storage device" },
  { id: 2, name: "USB charging" }
];
class NetworkForm extends React.Component {
  constructor() {
    super()
    this.state = {
      network: "",
      isVolte: false,
      fGbands: "",
      thGbands: "",
      twGbands: "",
      wifi: "",
      wifiFeature:"",
      bversion: "",
      gps:"",
      usbConnectivity:"",
      isUSBC:false
    };
  }
  handleChange = e => {
    let value;
    if(e.target.type === 'checkbox'){
      value = e.target.value === 'true' ? false : true
    }else{
      value = e.target.type === "text" ? e.target.value : e.target.value;
    }
    const name = e.target.name;
    this.setState({ [name]: value })
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Network:</h1>
        <form>
          <div>
            <label>Network:</label>
            <select name="network" value={this.state.network} onChange={this.handleChange}>
              <option value="">select</option>
              {network.map(n => <option key={n.id} value={n.name}>{n.name}</option>)}
            </select>
          </div>
          <div>
            <label>is support voLTE:</label>
            <input type="checkbox" name="isVolte" value={this.state.isVolte} onChange={this.handleChange}/>
          </div>
          <br />
          <div id="bands">
            <label>Sim1:</label>
              <div>
                <label>4g bands:</label>
                <select name="fGbands" value={this.state.fGbands} onChange={this.handleChange}>
                <option value="">select</option>
                {fGbands.map(f => <option key={f.id} value={f.band}>{f.band}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="3g">3g bands:</label>
                  <select name="thGbands" value={this.state.thGbands} onChange={this.handleChange}>
                  <option value="">select</option>
                  {tGbands.map(t => <option key={t.id} value={t.band}>{t.band}</option>)}
                  </select>
              </div>
              <div>
                <label>2g bands:</label>
                <select name="twGbands" value={this.state.twGbands} onChange={this.handleChange}>
                <option value="">select</option>
                {twGbands.map(t => <option key={t.id} value={t.band}>{t.band}</option>)}
              </select>
              </div>
          </div><br />
          <div>
            <label>Wifi:</label>
            <select name="wifi" value={this.state.wifi} onChange={this.handleChange}>
              <option value="">select</option>
              {wifi.map(w => <option key={w.id} value={w.name}>{w.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>wifi feature:</label>
            <select name="wifiFeature" value={this.state.wifiFeature} onChange={this.handleChange}>
              <option value="">select</option>
              <option value="Wifi Direct">Wifi Direct</option>
              <option value="Mobile Hotspot">Mobile Hotspot</option>
            </select>
          </div>
          <div>
            <label >bluetooth version:</label>
            <select name="bversion" value={this.state.bversion} onChange={this.handleChange}>
              <option value="">select</option>
              {bluetooth.map(b => <option key={b.id} value={b.version}>{b.version}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>GPS:</label>
            <select name="gps" value={this.state.gps} onChange={this.handleChange}>
              <option value="">select</option>
              {gps.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
            </select>
          </div>
          <div>
            <label >USB Connection:</label>
            <select name="usbConnectivity" value={this.state.usbConnectivity} onChange={this.handleChange}>
              <option value="">select</option>
              {usbC.map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>USB Type-C port:</label>
            <input type="checkbox" name="isUSBC" value={this.state.isUSBC} onChange={this.handleChange}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default NetworkForm;
