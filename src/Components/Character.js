import React from 'react';
import { MY_KEY, MY_HASH } from '../config';
import { Link } from 'react-router-dom';

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
        <span className="character-name-h1"><h1>{character.name}</h1></span>
          <div className="details-box">
            <p>{character.description ? character.description : " "}</p>
            <button className="back-button">
              <Link to={'/'}>Back</Link>
            </button>
          </div>
      </div>
    );
  }
}

export default Character;
