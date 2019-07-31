import React from "react";

const audioJack = [
  {id:1, name:"3.5mm"}
]
const audioFeature = [
  {id:1, name:"Dolby Atmos"}
]
class MultimediaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isFm:false,
      isSpeaker:false,
      audioJack:"",
      audioFeature:""
    };
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
  };
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Multimedia:</h2>
        <form>
          <div>
            <label>FM Radio:</label>
            <input type="checkbox" name="isFm" value={this.state.isFm} onChange={this.handleChange}/>
          </div>
          <br />
          <div>
            <label>Loud Speaker:</label>
            <input type="checkbox" name="isSpeaker" value={this.state.isSpeaker} onChange={this.handleChange}/>
          </div>
          <br />
          <div>
            <label>Audio Jack:</label>
            <select value={this.state.audioJack} name="audioJack" onChange={this.handleChange}>
              <option value="">select</option>
              {audioJack.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
            </select>
          </div>
          <div>
            <label>Features:</label>
            <select name="audioFeature" value={this.state.audioFeature} onChange={this.handleChange}>
              <option value="">select</option>
              {audioFeature.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default MultimediaForm;
