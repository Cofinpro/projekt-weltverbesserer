import React, { Component } from "react";
import "./CharacterLabels.css";
import check from "../../img/Check.png";

class CharacterBox extends Component {
  render() {
    let divStyle;
    if(this.props.isSelected && (this.props.character.valueOf() == "Macher" || this.props.character.valueOf() == "Kommunikator")){
      divStyle = "character-Box text-center shake"
    }else{
      if(this.props.isSelected){
        divStyle = "character-Box text-center graying"
      }else{
      divStyle = "character-Box text-center"
      }
    }

    return (
      <div
        className={divStyle}
        
      >

        <div>
          <h2 className="text-center text-justify">
            {this.props.character.valueOf()}{" "}
          </h2>
        </div>

        <img
          src={this.props.image}
          alt="pic not found"
          className={"img-circle border-0 "}
        />

        <button type="button" className="btn btn-primary" onClick={() => this.props.onClick()} disabled={this.props.isSelected}>Übernehmen</button>

        <p className="text-Box margin-20-top">{this.props.description}</p>
      </div>
    );
  }
}

export default CharacterBox;
