import React, { Component } from 'react';
import './App.css';
import { MY_KEY } from './config';
import { MY_HASH } from './config'
import Form from './Components/Form';

class App extends Component {
  state = {
    characters: []
  }

  getCharacter = async (e) => {
    e.preventDefault();
    const characterName = e.target.elements.characterName.value;
    const api_call = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const data = await api_call.json();
    this.setState({
      characters: data.data.results
    });
    console.log(this.state.characters);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Marvel Characters Search</h1>
        </header>
        <Form getCharacter={this.getCharacter}/>
          { this.state.characters.map((character)=> {
            return (
              <div>
                <p key={character.id}>{character.name}</p>
                <p></p>
              </div>
            )
          }) }
      </div>
    );
  }
}

export default App;
