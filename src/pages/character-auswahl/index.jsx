import Slider from "react-slick";
import React, { Component } from "react";
import CharacterBox from "../../components/CharacterBoxes/CharacterBox.jsx";
import { Characters } from "./Characters";
import SelectedCharacterBox from "../../components/CharacterBoxes/SelectedCharacterBox.jsx";
import "./style.css";
import isMobileOnly from "react-device-detect";

class Character extends Component {
  constructor(props) {
    super(props);

    var characters = Characters;
    var characterSelection = new CharacterSelection();

    this.state = {
      selection: characterSelection,
      characters: characters
    };    
  }

  addCharacter(character) {
    let i = 0;
    while (i < this.state.selection.getSelection().length) {
      if (!this.state.selection.getCharacter(i)) {
        this.state.selection.setCharacter(character, i);
        return this.setState(this.state);
      }
      i++;
    }
  }

  removeSelectedCharacter(character) {
    let i = 0;
    while (i < this.state.selection.getSelection().length) {
      if (this.state.selection.getCharacter(i) === character) {
        this.state.selection.setCharacter(null, i);
        return this.setState(this.state);
      }
      i++;
    }
  }

  renderCharacters() {
    var characters = this.state.characters
      .sort((a, b) => a.Key - b.Key)
      .map(character => {
        const isSelected = this.state.selection.hasCharacter(character);
        return (
          <div key={character.Key}>
            <div>
              <CharacterBox
                image={character.Image}
                character={character.Name}
                description={character.Description}
                onClick={() => this.addCharacter(character)}
                isSelected={isSelected}
              />
            </div>
          </div>
        );
      });
    return characters;
  }

  renderSelectedCharacters(selectedCharacter) {    
    if (!selectedCharacter) {
      return (
        <div>Bitte Charakter auswählen</div>
      );
    }
    return (
      <div>
        <SelectedCharacterBox
          Image={selectedCharacter.Image}
          Name={selectedCharacter.Name}
          onClick={() => this.removeSelectedCharacter(selectedCharacter)}
        />
      </div>
    );
  }

  changePrio(prio1, prio2) {
    const characterHigherPrio = this.state.selection.getCharacter(prio1);
    const characterLowerPrio = this.state.selection.getCharacter(prio2);
    this.state.selection.setCharacter(characterLowerPrio, prio1);
    this.state.selection.setCharacter(characterHigherPrio, prio2);
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    if (isMobileOnly) {
      return <div>Bitte besuche uns von einem Tablet oder einem PC</div>;
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3 text-center" />
            <div className="col-12 col-md-6">
              <h3>
                Hallo Berwerber, <br />
                <br />wir wollen dich ein wenig kennen, sag uns doch welche 3
                Charaktere am besten zu dir passen.
              </h3>
            </div>
            <div className="col-12 col-md-3 text-center" />
          </div>
          <div className="row margin-40-top">
            <div className="col-12 col-md-3 text-center">
              <div className="row">
                <div className="col-12">
                  <hr />
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <p>{"Character 1"}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      { this.renderSelectedCharacters(this.state.selection.getCharacter(0))}
                      <hr />
                    </div>
                  </div>
                  <div className="switch" onClick={() => this.changePrio(0, 1)}><i className="icon fa fa-arrows-v"></i></div>
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <p>{"Character 2"}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      {this.renderSelectedCharacters(this.state.selection.getCharacter(1))}
                      <hr />
                    </div>
                  </div>
                  <div className="switch" onClick={() => this.changePrio(1, 2)}><i className="icon fa fa-arrows-v"></i></div>
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <p>{"Character 3"}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      {this.renderSelectedCharacters(this.state.selection.getCharacter(2))}
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-9">
              <Slider {...settings}>{this.renderCharacters()}</Slider>
            </div>
          </div>
        </div>

        <div>
          <a
            href="/Eigenschaften"
            className="btn btn-outline-secondary float-right"
            role="button"
          >
            Weiter
            </a>
        </div>

      </div>
    );
  }
}

class CharacterSelection {
  selection = [null, null, null];

  constructor() {}

  getCharacter(prio) {
    return this.selection[prio];
  }
  setCharacter(character, prio) {
    this.selection[prio] = character;
  }
  getSelection() {
    return this.selection;
  }
  hasCharacter(character) {
    return this.selection.includes(character);
  }
}

export default Character;