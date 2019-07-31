import React from 'react';

const Brands = [
  {id:1, name:'Sumsung'},
  {id:2, name:'xiamoi'},
  {id:3, name:'appo'},
  {id:4, name:'vivo'},
  {id:5, name:'Apple'}
]
const Os = [
  { id: 1, name: "andriod 9.0 (Pie)" },
  { id: 2, name: "andriod 8.0 (Oreo)" },
  { id: 3, name: "andriod 7.0 (Nougat)" },
  { id: 4, name: "Windows" },
  { id: 5, name: "andriod 6.0 (Marshmallow)" },
  { id: 6, name: "andriod 5.0 (Lollipop)" },
  { id: 7, name: "MacOS" }
];
const simSize = [
  { id: 1, name: "Standard SIM" }, //Standard SIM (15 x 25mm) Micro SIM (12 x 15mm) Nano SIM (8.8 x 12.3mm)
  { id: 2, name: "Micro SIM" },
  { id: 3, name: "Nano SIM" }
];
const simslots = [
  {id:1, name: "Single"},
  {id:2, name: "Double"}
]
const phoneType = [
  {id:1, name:"Smartphones"},
  {id:2, name:"keypad"}
]
class GeneralForm extends React.Component{
  constructor(){
    super()
    this.state = {
      selectBrand: "",
      phoneType: "",
      ldate:"",
      os: "",
      slot: "",
      isTrue1: false,
      isTrue2: false,
      isTrue3:false,
      isFinger:false,
      isQuick:false
    }
  }
  handleChange = (e) => {
    console.log(e.target.type)
    const value = e.target.type === "date" ? e.target.value : e.target.value
    const name = e.target.name
    this.setState({[name]:value})
  }
  handleCheckbox = (e) => {
    const value = e.target.value === 'true' ? false : true
    const name = e.target.name
    this.setState({[name]:value})
  }
  render(){
    console.log(this.state.isFinger)
    return (
      <div>
        <h2>General</h2>
        <form>
          <div>
            <label>product Launch Date:</label>
            <input type="date" name="ldate" onChange={this.handleChange}/>
          </div>
          <br />
          <div>
            <label>Brand Name:</label>
            <select value={this.state.selectBrand} name="selectBrand" onChange={this.handleChange}>
              <option value="">select</option>
              {Brands.map(b => (
                <option key={b.id} value={`${b.name}`}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="ptype">Phone type</label>
            <select to="ptype" value={this.state.phoneType} name="phoneType" onChange={this.handleChange}>
              <option value="">select</option>
              {phoneType.map(pt => <option key={pt.id} value={pt.name}>{pt.name}</option>)}
            </select>
          </div><br/>
          <div>
            <label>operating system:</label>
            <select value={this.state.os} name="os" onChange={this.handleChange}>
              <option value="">select</option>
              {Os.map(os => <option key={os.id} value={os.name}>{os.name}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>simslot:</label>
            <select value={this.state.slot} name="slot" onChange={this.handleChange}>
              <option value="">select</option>
              {simslots.map(sl => <option key={sl.id} value={sl.name}>{sl.name}</option>)}
            </select>
          </div>
          <br />
          {/* <div> */}
            {/* <label>sim1:</label>
            <select value={this.}>
              <option value="">select</option>
              {simSize.map(ss => <option key={ss.id} value={ss.name}>{ss.name}</option>)}
            </select>
          </div> */}
          <div>
            <label>Network:</label>
            <input type="checkbox"  name="isTrue1" value={this.state.isTrue1} onChange={this.handleCheckbox} />
            <label>4g</label>
            <input type="checkbox"  name="isTrue2" value={this.state.isTrue2} onChange={this.handleCheckbox} />
            <label>3g</label>
            <input type="checkbox"  name="isTrue3" value={this.state.isTrue3} onChange={this.handleCheckbox} />
            <label>2g</label>
          </div>
          <br />
          <div>
            <input htmlFor="finger" value={this.state.isFinger} name="isFinger" onChange={this.handleCheckbox} type="checkbox" />
            <label to="finger">Finger Print Support</label>
          </div>
          <div>
            <input htmlFor="Quick" value={this.state.isQuick} name="isQuick" onChange={this.handleCheckbox} type="checkbox" />
            <label to="Quick">Support Quick Recharge</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default GeneralForm