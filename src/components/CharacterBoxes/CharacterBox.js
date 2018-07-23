import React, { Component } from 'react';
import "./CharacterLabels.css";
import check from "../../img/Check.png";

class CharacterBox extends Component {

  render() {

    return (

      <div className={"character-Box " + this.props.additionalStyleClass} onClick={() => this.props.onClick()}>
        <div>
          <h1 className="text-center text-justify">{this.props.character.valueOf()} </h1>
        </div>
        
        <img src={this.props.image} alt="pic not found" className={"img-circle border-0 "  } />
        
          <blockquote className='text-Box'>
            {this.props.description}
            </blockquote>
                </div >
    );

  }
}

export default CharacterBox;



