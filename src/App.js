import React, { Component } from 'react';
import './App.css';
import { MY_KEY, MY_HASH } from './config';
import Form from './Components/Form';
import Characters from './Components/Characters';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    characters: [],
    error: undefined
  }

  getCharacter = async (e) => {
    e.preventDefault();
    const firstLetter = e.target.elements.characterName.value;
    const api_call = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${firstLetter}&ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const data = await api_call.json();
    if (firstLetter) {
      this.setState({
        characters: data.data.results,
        error: undefined
      });
   } else {
     this.setState({
       characters: [],
       error: "Please, type a letter or a name."
     });
   }
   console.log(this.state.characters);
   console.log(this.state.error);
  }

  // componentDidMount = () => {
  //   const json = localStorage.getItem("characters");
  //   const characters = JSON.parse(json);
  //   this.setState({ characters });
  // }
  //
  // componentDidUpdate = () => {
  //   const characters = JSON.stringify(this.state.characters);
  //   localStorage.setItem("characters", characters);
  // }

 refreshPage = () => {
   window.location.reload();
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to={'/'} onClick={this.refreshPage}>Marvel Characters Search</Link>
          </h1>
        </header>
        <Form getCharacter={this.getCharacter} error={this.state.error} />
        <Characters characters={this.state.characters} />
        <footer className="App-footer">
          Data provided by <a href="https://developer.marvel.com/">Marvel API</a>
        </footer>
      </div>
    );
  }
}

export default App;
