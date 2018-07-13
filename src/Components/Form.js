import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCharacter}>
        <input className="form-input" type="text" name="characterName" />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
