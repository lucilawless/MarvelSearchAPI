import React from 'react';
import { Link } from 'react-router-dom';

class Characters extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          { this.props.characters.map((character)=> {
            return (
              <div key={character.title} className="col-sm-4" style={{ marginBottom:"2rem" }}>
                <div className="characters-box">
                  <div key={character.characterId}>
                    <img
                      className="characters-box-img"
                      src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension}
                      alt={character.name}
                      />
                    <div className="character-text">
                      <h5 className="character-name">{character.name}</h5>
                      <p>
                        { character.description.length < 207 ? `${character.description}` : `${character.description.substring(0, 207)}...` }
                      </p>
                    </div>
                    <button className="character-button">
                      <Link to={{ pathname: `/character/${character.characterId}` }}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Characters;
