import React from "react";

const batteryType = [
  { id: 1, type: "Nickel-cadmium (NiCd)" },
  { id: 2, type: "NiMH (NiMH)" },
  { id: 3, type: "Lithium-ion (Li-ion)" },
  { id: 4, type: "Lithium Polymer (Li-pol) batteries" }
];
class BatteryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      capacity: 0,
      batteryType: "",
      Replacable: false,
      batteryHour: 0,
      batteryNetwork: ""
    };
  }
  handleChange = e => {
    let value;
    if(e.target.type === 'checkbox'){
        value = e.target.value === 'true' ? false : true;
    }else{
       value = e.target.type === 'text' ? e.target.value : e.target.value;
    }
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h2>Battery</h2>
        <form>
          <div>
            <label>capacity:</label>
            <input
              type="number"
              name="capacity"
              value={this.state.capacity}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="btype">Batery type:</label>
            <select
              name="batteryType"
              value={this.state.batteryType}
              onChange={this.handleChange}
            >
              <option value="">select</option>
              {batteryType.map(bt => (
                <option key={bt.id} value={bt.type}>
                  {bt.type}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="replace">Replacable:</label>
            <input type="checkbox" name="Replacable" value={this.state.Replacable} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label >Battery Life:</label>
            <div>
              <label>hour</label>
              <input type="number" name="batteryHour" value={this.state.batteryHour} onChange={this.handleChange} />
            </div>
            <div>
              <label>network</label>
              <input type="text" name="batteryNetwork" value={this.state.batteryNetwork} onChange={this.handleChange} />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default BatteryForm;
