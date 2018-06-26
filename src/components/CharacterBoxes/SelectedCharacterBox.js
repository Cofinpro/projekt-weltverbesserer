import React, { Component } from 'react';
import "./CharacterLabels.css";

class SelectedCharacterBox extends Component {

    render() {

        return (
            <div>
                <img src={this.props.Image} className="Character-logo" alt="logodrei" />

                <label className="CharacterLabel">
                    {this.props.Name}
        </label>
            </div>
        );

    }
}
export default SelectedCharacterBox;

