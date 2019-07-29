import React from 'react'


class Initial extends React.Component{
  constructor() {
		super()
		this.state = {
			selectFile:[],
			price: 0,
			name: ''
		}
	}
	handleChange = (e) => {
		const value = e.target.type === 'text' ? e.target.value : e.target.value
		const name = e.target.name
		this.setState({[name]: value})
	}
	fileSelectedHandle = (e) => {
    this.setState({
      selectFile:e.target.files
    })
	}
	handleSubmit = (e) => {
    e.preventDefault()
    // let data = new FormData();
    // data.append("productPrice", this.state.price)
    // data.append("productName", this.state.name)
    // data.append("images", this.state.selectFile)
    const data = {
      productName: this.state.name,
      productPrice: this.state.price
    }

   this.props.handleSubmit(data)
	}
	render(){
    console.log(this.state)
		return (
      <div>
        <h2>Product</h2>
        <form >
          <div>
            <label>Enter Product Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Images:</label>
            <input
              type="file"
              name="images"
              onChange={this.fileSelectedHandle}
              encType="mulitpart/form-data"
              multiple
            />
          </div>
          <br />
          <div>
            <label>Enter Price of product</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
}
}
export default Initial