import React from 'react';
import { Link } from 'react-router-dom';
import { MY_KEY, MY_HASH } from './../config';
// const MY_KEY = process.env.REACT_APP_MY_KEY;
// const MY_HASH = process.env.REACT_APP_MY_HASH;

class Character extends React.Component {

  state = {
    activeCharacter: [],
    comics: {},
    image: {},
    comicsUrl: {}
  }

  componentDidMount = async () => {
    const name = this.props.location.state.character;
    const request = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${MY_KEY}&hash=${MY_HASH}`);
    const response = await request.json();
    this.setState({
      activeCharacter: response.data.results[0],
      comics: response.data.results[0].comics,
      image: response.data.results[0].thumbnail,
      comicsUrl: response.data.results[0].urls.pop()
    });
  }

  render() {
    const character = this.state.activeCharacter;
    const comicsCount = this.state.comics;
    const image = this.state.image;
    const comicsLink = this.state.comicsUrl;
    return (
      <div>
        <span className="character-name-h1"><h1>{character.name}</h1></span>
        <div className="container">
            <div className="characters-box">
              <img className="characters-box-img" src={image.path + '/standard_large' + '.' + image.extension} alt={character.name}/>
            </div>
            <button className="back-button">
              <Link to={'/'}>Back</Link>
            </button>
            { character.description !== "" ?
              <div className="details-box">
                <p>{character.description}</p>
              </div> : <div className="details-box">No details provided for this character yet.</div>
            }
            { comicsCount.available && comicsLink.url !== "" ?
                 <div className="comic-info">
                   <p>Available in {comicsCount.available} comics.</p>
                   <p><a href={comicsLink.url}>See all titles here</a></p>
                 </div> : ""
             }
        </div>
        <footer className="App-footer" style={{ position: "fixed" }}>
          Data provided by <a href="https://developer.marvel.com/">Marvel API</a>
        </footer>
      </div>
    );
  }
}

export default Character;
