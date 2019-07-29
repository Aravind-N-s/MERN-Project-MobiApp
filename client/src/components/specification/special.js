import React from "react";

const sensors = [
  {id: 1, sensor: "Light sensor"},
  {id: 2, sensor: "Proximity sensor"},
  {id: 3, sensor: "Accelerometer"},
  {id: 4, sensor: "Compass"},
  {id: 5, sensor: "Gyroscope"}
];
const sPosition = [
  {id:1, position:"Rear"},
  {id:2, position:"Front"}
]
class SprecialForm extends React.Component {
  constructor() {
    super()
    this.state = {
      isFinger:false,
      sensorPosition:"",
      otherSensors:""
    }
  }
  handleChange = e => {
    let value;
    if (e.target.type === "checkbox") {
      value = e.target.value === "true" ? false : true;
    } else {
      value = e.target.type === "text" ? e.target.value : e.target.value;
    }
    const name = e.target.name;
    this.setState({ [name]: value });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Special Features:</h2>
        <form>
          <div>
            <label>FingerPrint Sensor:</label>
            <input type="checkbox" name="isFinger" value={this.state.isFinger} onChange={this.handleChange}/>
          </div>
          <br />
          <div>
            <label >Sensor Position:</label>
            <select name="sensorPosition" value={this.state.sensorPosition} onChange={this.handleChange}>
              <option value="">select</option>
              {sPosition.map(s => <option key={s.id} value={s.position}>{s.position}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>other Sensor:</label>
            <select name="otherSensors" value={this.state.otherSensors} onChange={this.handleChange}>
              <option value="">select</option>
              {sensors.map(s => <option key={s.id} value={s.sensor}>{s.sensor}</option>)}
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default SprecialForm;
