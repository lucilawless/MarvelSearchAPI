import React from 'react';
import { MY_KEY, MY_HASH } from '../config';
import { Link } from 'react-router-dom';

class Character extends React.Component {
  state = {
    activeCharacter: [],
    comics: {},
    image: {}
  }

  componentDidMount = async () => {
    const name = this.props.location.state.character;
    const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const response = await request.json();
    this.setState({
      activeCharacter: response.data.results[0],
      comics: response.data.results[0].comics,
      image: response.data.results[0].thumbnail
    });
    console.log(this.state.activeCharacter);
    console.log(this.state.activeCharacter.comics.available);
    console.log(this.state.activeCharacter.comics.items);
    console.log(this.state.activeCharacter.thumbnail.path + '.' + this.state.activeCharacter.thumbnail.extension);
  }

  render() {
    const character = this.state.activeCharacter;
    const comicsCount = this.state.comics;
    const image = this.state.image;
    return (
      <div className="container">
        <span className="character-name-h1"><h1>{character.name}</h1></span>
        <div>
          { character.description !== "" ?
            <div className="details-box">
              <p>{character.description}</p>
            </div> : <div className="details-box">No details provided for this character yet.</div>
          }
        </div>
        <button className="back-button">
          <Link to={'/'}>Back</Link>
        </button>
        <div className="details-box">
          Appearance in comics: {comicsCount.available}
        </div>
        <div className="details-box">
          <img src={image.path + '/standard_large' + '.' + image.extension} />
        </div>
      </div>
    );
  }
}

export default Character;
