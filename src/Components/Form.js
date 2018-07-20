import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCharacter}>
        <input className="form-input" type="text" name="characterName" placeholder="  first letter or name" />
        <button>Search</button>
        <p>{this.props.error}</p>
      </form>
    );
  }
}

export default Form;
