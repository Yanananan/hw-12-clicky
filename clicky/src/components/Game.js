//--------------------------------------------------
import React, { Component } from 'react';

class Child extends Component {
  constructor(){
    super()

    this.state = {
      data: "somedata",
      input: ""
    }

    this.handleInputOnChange = this.handleInputOnChange.bind(this)
  }

  handleInputOnChange(event) {
    const value = event.target.value
    console.log(value)

    this.setState({
      input: value
    })

    console.log("state", this.state)
  }

  render() {
    console.log(this.props)

    console.log("state->", this.state.data)

    return (
        <div style={{
          color: this.props.color
          }}>
          test
          <input 
            id="name" 
            onChange={this.handleInputOnChange}>
          </input>
        </div>
       )
  }
}

// const Child = (props) => {
//   return (
//   <div style={{
//     color: props.color,
//     fontSize: props.fontSize
//     }}>
//     test
//   </div> )
// }

export default Child;