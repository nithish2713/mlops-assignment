import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    value1: "",
    value2: "",
    value3: "",
    prediction: null,
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value1, value2, value3} = this.state;

    axios.post("http://127.0.0.1:8000/predict/", {
        v1: value1,
        v2: value2,
        v3: value3,
      })
      .then((response) => {
        this.setState({ prediction: response.data.prediction, error: null });
      })
     
  };

  render() {
    const { value1, value2, value3,  prediction, error } = this.state;

    return (
      <div>
        <h1 style={{ paddingLeft: '10px', color:'wheat' }}>AUTOMOBILES INFORMATIONS</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px'}}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>cylinders:</label>
            <input type="text" name="value1" value={value1} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>horsepower:</label>
            <input type="text" name="value2" value={value2} onChange={this.handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat' }}>weight:</label>
            <input type="text" name="value3" value={value3} onChange={this.handleChange} />
          </div>
          <div style={{ marginRight: '10px' , marginLeft:'20px', color:'wheat'}}>
          <button type="submit">SUBMIT</button>
          </div>
        </form>
        {prediction !== null && (
          <div>
            <h2 style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>Prediction:</h2>
            <p style={{ marginRight: '10px' , marginLeft:'20px', color:'Red'}}>{prediction}</p>
          </div>
        )}
        {error && <div>Error: {error}</div>}
      </div>
    );
  }
}

export default App;
