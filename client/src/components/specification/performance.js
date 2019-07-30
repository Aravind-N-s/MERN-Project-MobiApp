import React from "react";

const chipsets = [
  { id: 1, name: "Qualcomm Snapdragon 675" },
  { id: 2, name: "kirin 980" },
  { id: 3, name: "Exynos 9820" },
  { id: 4, name: "Helio X30" }
];
const processor = [
  {id:1, name:"Dual core"},
  {id:2, name:"Octa core"},
  {id:3, name:"Hexa core"},
  {id:4, name:"Quad core"}
  ]
const graphics = [
  {id:1, name:"Adreno 612"}
]
const ram = [
  {id:1, name:"2"},
  {id:2, name:"4"},
  {id:3, name:"6"},
  {id:4, name:"8"}
]
class PerformanceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      chipset:"",
      architecture:"", // number
      processor:"", 
      graphics:"",
      ram:"" //number
    };
  }
  handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Performance</h2>
        <form>
          <div>
            <label>chipset:</label>
            <select name="chipset" value={this.state.chipset} onChange={this.handleChange}>
              <option value="">select</option>
              {chipsets.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>Architecture:</label>
            <select name="architecture" value={this.state.architecture} onChange={this.handleChange}>
              <option value="" >select</option>
              <option value="64" >64 bit</option>
              <option value="32" >32 bit</option>
            </select>
          </div>
          <br />
          <div>
            <label>Processor:</label>
            <select name="processor" value={this.state.processor} onChange={this.handleChange}>
              <option value="">select</option>
              {processor.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </div>
          <br />
          <div >
            <label>graphics:</label>
            <select value={this.state.graphics} name="graphics" onChange={this.handleChange}>
              <option value="">select</option>
              {graphics.map(g => <option key={g.id} value={g.name}>{g.name}</option> )}
            </select>
          </div>
          <br />
          <div>
            <label>Ram:</label>
            <select name="ram" alue={this.state.ram} onChange={this.handleChange}>
              <option value="">select</option>
              {ram.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PerformanceForm;
