import React from "react"

const pixels = [
  {id:1, name:'1080 x 1920'},
  {id:2, name:'1440 x 2960'}
]

const pixelDensity = [
  { id: 1, name: "409 ppi" },
  { id: 2, name: "326 ppi" },
  { id: 3, name: "550 ppi" }
];

const displayType = [
  { id: 1, name: "TFT LCD" },
  { id: 2, name: "IPS-LCD" },
  { id: 3, name: "Capacitive Touchscreen LCD" },
  { id: 4, name: "OLED" },
  { id: 5, name: "AMOLED " },
  { id: 6, name: "Super AMOLED displays" }
];
const secrenProtector = [
  { id: 1, name: "Polyethylene Terephthalate (PET)" },
  { id: 2, name: "Thermoplastic Polyreuthane (TPU)" },
  { id: 3, name: "Tempered Glass" },
  { id: 4, name: "Nano Liquid" },
  { id: 5, name: "impact protection" }
];
const touch = [
  {id:1, name:'Corning Gorilla Glass v5'},

]
class DisplayForm extends React.Component {
  constructor() {
    super();
    this.state = {
      screenSize:'',
      screenResolution:'',
      pixelDensity:'',
      displayType:'',
      screenProtector:'',
      touchScreen:''
    };
  }
  handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Display</h2>
        <form>
          {/* <div>
            <label>Screensize:</label>
            <input value={this.state.screenSize} onChange={this.handleChange} />
          </div> */}
          {/* <br /> */}
          <div>
            <label>Screen Resolution:</label>
            <select value={this.state.screenResolution} name="screenResolution" onChange={this.handleChange}>
              <option value="">select</option>
              {pixels.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </div>
          <br />
          {/* <div>
            <label>aspect ratio:</label>
            <select>
              <option />
            </select>
          </div>
          <br /> */}
          <div>
            <label>pixel density:</label>
            <select value={this.state.pixelDensity} name="pixelDensity" onChange={this.handleChange}>
              <option value="">select</option>
              {pixelDensity.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>display Type:</label>
            <select value={this.state.displayType} name="displayType" onChange={this.handleChange}>
              <option value="">select</option>
              {displayType.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>screen protector:</label>
            <select value={this.state.screenProtector} name="screenProtector" onChange={this.handleChange}>
              <option value="">select</option>
              {secrenProtector.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="touch">touch screen:</label>
            <select value={this.state.touchScreen} name="touchScreen" onChange={this.handleChange}>
              <option value="">select</option>
              {touch.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DisplayForm;
