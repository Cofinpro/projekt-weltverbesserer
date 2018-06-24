import React, { Component } from 'react';

class CharacterBox extends Component {

  render() {

    return (
      <div class="border">
        <img src={this.props.image} class="rounded-circle" alt="logodrei" onClick={() => this.props.onClick()}/>
        <h1 className="text-center">{this.props.character.valueOf()} </h1>
      </div >
    );

  }
}

export default CharacterBox;



