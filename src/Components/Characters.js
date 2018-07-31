import React from 'react';
import { Link } from 'react-router-dom';

class Characters extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginBottom:"5rem", marginTop:"2rem"}}>
          { this.props.characters.map((character) => {
            return (
              <div key={character.title} className="col-sm-4" style={{ marginBottom:"2rem" }}>
                <div className="characters-box">
                  <div key={character.characterId}>
                    <img
                      className="characters-box-img"
                      src={character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension}
                      alt={character.name}
                      />
                    <div>
                      <h5 className="character-name">
                        {character.name.length < 15 ? `${character.name}` : `${character.name.substring(0, 15)}...`}
                      </h5>
                    </div>
                    <button className="character-button">
                      <Link to={{
                        pathname: `/character/${character.id}`,
                        state: { character: character.name }
                      }}>Details</Link>
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
