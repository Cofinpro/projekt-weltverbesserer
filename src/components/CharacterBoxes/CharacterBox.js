import React, { Component } from 'react';

class CharacterBox extends Component {

  render() {

    return (
      <span onClick={() => this.props.onClick()}>
        <img src={this.props.image}  alt="logodrei" />
        <div>
        <h1 className="text-center text-justify">{this.props.character.valueOf()} </h1>
        </div>
      </span >
    );

  }
}

export default CharacterBox;



