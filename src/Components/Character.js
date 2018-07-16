import React from 'react';
import { MY_KEY, MY_HASH } from '../config';

class Character extends React.Component {
  state = {
    activeCharacter: []
  }

  componentDidMount = async () => {
    const name = this.props.location.state.character;
    const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const response = await request.json();
    this.setState({
      activeCharacter: response.data.results[0]
    });
    console.log(this.state.activeCharacter);
  }

  render() {
    console.log(this.props);
    const character = this.state.activeCharacter;
    return (
      <div className="container">
        <h1 className="character-name">{character.name}</h1>
        <div className="details-box">
          <p>{character.description ? character.description : " "}</p>
        </div>
      </div>
    );
  }
}

export default Character;
