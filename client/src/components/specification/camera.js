import React from "react";

const vRecording = [
  { id: 1, recording: "1920 X 1080" },
  { id: 2, recording: "1280 X 720" },
  { id: 3, recording: "640 x 480" }
];
const autoFocus = [
  {id:1, focus:"Phase Detection autofocus"}
]
const bFlash = [
  {id:1, flash:"Xenon flash"},
  {id:2, flash:"LED Flash"},
  {id:3, flash:"Dual LED"}
]
const imageResolution = [
  {id:1, resolution:"8000 x 6000"},
  {id:2, resolution:"3648 x 2752"}
]
class CameraForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fResolution: 0,
      fPhysicalAsperture: 0,
      fvRecording: "",
      bvRecording: "",
      bResolution: 0,
      autoFocus: "",
      bPhysicalAsperture: 0,
      imageResolution:"",
      settings:"",
      modes:"",
      features:""
    };
  }
  handleChange = e => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <h1>Front Camera:</h1>
          <div>
            <label>resolution:</label>
            <input type="number" value={this.state.fResolution} name="fResolution" onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label>Physical Asperture:</label>
            <input type="number" value={this.state.fPhysicalAsperture} name="fPhysicalAsperture" onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label>video Recording:</label>
            <select name="fvRecording" value={this.state.fvRecording} onChange={this.handleChange}>
              <option value="">select</option>
              {vRecording.map(vr => <option key={vr.id} value={vr.recording}>{vr.recording}</option>)}
            </select>
          </div>
          <br />
          <h1>Main Camera</h1>
          <div>
            <label>resolution:</label>
            <input type="number" value={this.state.bResolution} name="bResolution" onChange={this.handleChange} />
          </div><br />
          <div>
            <label htmlFor="focus">auto focus:</label>
            <select value={this.state.autoFocus} name="autoFocus" onChange={this.handleChange}>
              <option value="">select</option>
              {autoFocus.map(af => <option key={af.id} value={af.focus}>{af.focus}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>Physical Asperture:</label>
            <input type="number" value={this.state.bPhysicalAsperture} name="bPhysicalAsperture" onChange={this.handleChange} />
          </div><br />
          <div>
            <label>Flash:</label>
            <select name="flash" value={this.state.flash} onChange={this.handleChange}>
              <option value="">select</option>
              {bFlash.map(f => <option key={f.id} value={f.flash}>{f.flash}</option>)}
            </select>
          </div><br />
          <div>
            <label >Image Resolution:</label>
            <select name="imageResolution" value={this.state.imageResolution} onChange={this.handleChange}>
              <option value="">select</option>
              {imageResolution.map(ir => <option key={ir.id} value={ir.resolution}>{ir.resolution}</option>)}
            </select>
          </div><br />
          <div>
            <label htmlFor="setting">Settings:</label>
            <input type="text" name="settings" value={this.state.settings} onChange={this.handleChange} multiple/>
          </div><br />
          <div>
            <label htmlFor="mode">Mode:</label>
            <input type="text" name="modes" value={this.state.modes} onChange={this.handleChange} multiple/>
          </div>
          <br />
          <div>
            <label>Features:</label>
            <input type="text" name="features" value={this.state.features} onChange={this.handleChange} multiple/>
          </div><br />
          <div>
            <label>video Recording:</label>
            <select name="bvRecording" value={this.state.bvRecording} onChange={this.handleChange}>
              <option value="">select</option>
              {vRecording.map(vr => <option key={vr.id} value={vr.recording}>{vr.recording}</option>)}
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default CameraForm;
