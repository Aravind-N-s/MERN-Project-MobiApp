import React from "react";

const intMemory = [
  {id:1, storage:'2GB'},
  {id:2, storage:'4GB'},
  {id:3, storage: '6GB'},
  {id:4, storage:'8GB'},
  {id:5, storage:'12GB'}
]
const expMemory = [
  {id:1, exp:"128GB"},
  {id:2, exp:"256GB"}
]
class StorageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      internalMemory:"",
      expandableMemory:"",
      isOTG:false
    }
  }
  handleChange = e => {
    let value;
    if(e.target.type === "checkbox"){
      value = e.target.value === 'false' ? true : false
    }else{
      value = e.target.type === "text" ? e.target.value : e.target.value;
    }
    const name = e.target.name;
    this.setState({ [name]: value });
  }
  // handleSubmit = e => {
  
  // }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Storage</h2>
        <form>
          <div>
            <label>Internal Memory:</label>
            <select value={this.state.internalMemory} name="internalMemory" onChange={this.handleChange}>
              <option value="">select</option>
              {intMemory.map(im => <option key={im.id} value={im.storage}>{im.storage}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label>expandable Memory:</label>
            <select value={this.state.expandableMemory} name="expandableMemory" onChange={this.handleChange}>
              <option value="">select</option>
              {expMemory.map(exp => <option key={exp.id} value={exp.exp}>{exp.exp}</option>)}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="usb">usbotg:</label>
            <input type="checkbox" name="isOTG" value={this.state.isOTG} onChange={this.handleChange}/>
          </div><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default StorageForm;
