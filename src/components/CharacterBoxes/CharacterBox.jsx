import React, { Component } from "react";
import "./CharacterLabels.css";
import check from "../../img/Check.png";

class CharacterBox extends Component {
  render() {
    return (
      <div
        className={"character-Box text-center " + this.props.additionalStyleClass}
        onClick={() => this.props.onClick()}
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

        <button type="button" className="btn btn-primary">Übernehmen</button>

        <p className="text-Box margin-20-top">{this.props.description}</p>
      </div>
    );
  }
}

export default CharacterBox;
