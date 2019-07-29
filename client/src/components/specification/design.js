import React from "react";

const color = [
  {id:1, name:'red'},
  {id:2, name:'black'},
  {id:3, name:'white'},
  {id:4, name:'silver'},
  {id:5, name:'gold'}
]
class DesignForm extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      pWidth:"",
      thickness:"",
      isWaterProof:false,
      color:[]
    };
  }
  handleChange = e => {
    console.log(e.target.type)
    if(e.target.type === 'checkbox'){
      console.log(e.target.type);
      const value = e.target.value === true ? false : true;
      const name = e.target.name;
      this.setState({ [name]: value });
    }else{
      const value = e.target.type === "text" ? e.target.value : e.target.value;
      const name = e.target.name;
      this.setState({ [name]: value });
    }
  };
  render() {
    console.log(this.state)
    console.log(this.state.color);
    return (
      <div>
        <h2>Design</h2>
        <form>
          <div>
            <label htmlFor="height">Height of product:</label>
            <input type="text" name="height" value={this.state.height} onChange={this.handleChange} />
          </div>
          <br />
          <div>
           <label>Weight of product:</label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label >Thickness of product:</label>
            <input type="text" name="thickness" value={this.state.thickness} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label >Width of product:</label>
            <input type="text" name="pWidth" value={this.state.pWidth} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label>Color:</label>
            <select name="color" value={this.state.color} onChange={this.handleChange} multiple>
              {color.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div><br />
          <div>
            <label>Water Proof:</label>
            <input type="checkbox" name="isWaterProof" value={this.state.isWaterProof} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DesignForm
