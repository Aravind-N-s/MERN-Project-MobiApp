import React from "react";

class SprecialForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  fileSelectedHandle = e => {};
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      price: this.state.price,
      files: this.state.selectedFiles
    };
    console.log(formData);
  };
  render() {
    return (
      <div>
        <h2>Special Features:</h2>
        <form>
          <div>
            <label htmlFor="fngr">FingerPrint Sensor:</label>
            <input to="fngr" type="checkbox" />
          </div>
          <br />
          <div>
            <label htmlFor="spos">Sensor Position:</label>
            <input to="spos" type="checkbox" />
          </div>
          <br />
          <div>
            <label>Audio Jack:</label>
            <select>
              <option />
            </select>
          </div>
          <div>
            <label>Features:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>other Sensor:</label>
            <select>
              <option />
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
