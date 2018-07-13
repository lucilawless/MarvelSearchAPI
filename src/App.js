import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';

class App extends Component {

  getCharacter = (e) => {
    e.preventDefault();
    const characterName = e.target.elements.characterName.value;
    console.log(characterName);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Marvel Characters Search</h1>
        </header>
        <Form getCharacter={this.getCharacter}/>

      </div>
    );
  }
}

export default App;
