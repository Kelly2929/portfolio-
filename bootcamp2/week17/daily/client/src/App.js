import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    input: ''
  };

  componentDidMount() {
    this.fetchHelloMessage();
  }

  fetchHelloMessage = async () => {
    const response = await fetch('http://localhost:5000/api/hello');
    const message = await response.text();
    this.setState({ message });
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: this.state.input })
    });
    const reply = await response.text();
    alert(reply);
  };

  render() {
    return (
      <div>
        <header>
          <h1>{this.state.message}</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
