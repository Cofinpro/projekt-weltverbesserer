import React, { Component } from 'react';
import "./CharacterLabels.css";
import CloseButton from "../../img/CloseButton.jpg";


class SelectedCharacterBox extends Component {

    render() {

        return (
            <div className="row justify-content-center">
            <div className="col-9" >
                <img src={this.props.Image} className="Character-logo" alt="logodrei" />
            
                <label className="CharacterLabel text-center">
                    {this.props.Name}
                </label>
                </div>
            <div className="col-3" >
            <button className="btn img-circle" onClick={() => this.props.onClick()}><i className="fa fa-close"></i></button>
            </div>
  
            </div>
        );
    }
}
export default SelectedCharacterBox;

