import React, { Component } from 'react';
import './App.css';
import { MY_KEY } from './config';
import { MY_HASH } from './config'
import Form from './Components/Form';

class App extends Component {
  state = {
    names: []
  }

  getCharacter = async (e) => {
    e.preventDefault();
    const characterName = e.target.elements.characterName.value;
    const api_call = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const data = await api_call.json();
    console.log(data);


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
