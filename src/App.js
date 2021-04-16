import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shakeSpeare: ""
    }
  }
  componentDidMount(){
    //API call goes here
    let poemApi = "http://shakeitspeare.com/api/poem";
    fetch(poemApi)
    .then(response => response.json())
    .then(response => this.setState({
      shakeSpeare: response.poem
    }))
    .catch(ex => console.log("We got an error!", ex));
  }


  render() {
    return (
      <div className="App">
        <h1>My Favorite Shakespeare Poem:</h1>
        {this.state.shakeSpeare}
      </div>
    );
  }
}

export default App;
