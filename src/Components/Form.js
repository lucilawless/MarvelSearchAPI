import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCharacter}>
        <input className="form-input" type="text" name="characterName" />
        <button>Search</button>

          <div>{this.getCharacter}</div>

      </form>
    );
  }
}

export default Form;
