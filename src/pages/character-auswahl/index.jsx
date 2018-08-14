import Slider from "react-slick";
import React, { Component } from "react";
import CharacterBox from "../../components/CharacterBoxes/CharacterBox.jsx";
import { Characters } from "./Characters";
import SelectedCharacterBox from "../../components/CharacterBoxes/SelectedCharacterBox.jsx";
import ArrowDown from "../../img/icon_arrow_dotted_down_orange.svg";
import ArrowUp from "../../img/icon_arrow_dotted_up_orange.svg";
import ImageMissingCharacter from "../../img/missing_character.png";
import "./style.css";
import isMobileOnly from "react-device-detect";

class Character extends Component {
  constructor(props) {
    super(props);

    var characters = [
      Characters.Planer,
      Characters.Visionaer,
      Characters.Macher,
      Characters.Kommunikator,
      Characters.Checker,
      Characters.Energiebuendel
    ];

    this.state = {
      prio1: null,
      prio2: null,
      prio3: null,
      characters: characters
    };
  }

  handleClick(toSetPrio) {
    if (this.characterIsSelected(toSetPrio)) {
      return;
    }
    if (!this.state.prio1) {
      this.setState({ prio1: toSetPrio });
      return;
    }
    if (!this.state.prio2) {
      this.setState({ prio2: toSetPrio });
      return;
    }
    if (!this.state.prio3) {
      this.setState({ prio3: toSetPrio });
      return;
    }
  }

  characterIsSelected(character) {
    return (
      character === this.state.prio1 ||
      character === this.state.prio2 ||
      character === this.state.prio3
    );
  }

  removeSelectedCharacter(toRemove) {
    if (toRemove === this.state.prio1) {
      this.setState({ prio1: null }, () => this.orderPrios());
    }

    if (toRemove === this.state.prio2) {
      this.setState({ prio2: null }, () => this.orderPrios());
    }

    if (toRemove === this.state.prio3) {
      this.setState({ prio3: null }, () => this.orderPrios());
    }
  }

  orderPrios() {
    if (!this.state.prio1) {
      this.setState({ prio1: this.state.prio2 });
      this.setState({ prio2: this.state.prio3 });
      this.setState({ prio3: null });
    }

    if (!this.state.prio2) {
      this.setState({ prio2: this.state.prio3 });
      this.setState({ prio3: null });
    }
  }

  renderCharacters() {
    var characters = this.state.characters
      .sort((a, b) => a.Key - b.Key)
      .map(character => {
        const isSelected = this.characterIsSelected(character);
        return (
          <div key={character.Key}>
            <div>
              {isSelected ? (
                <CharacterBox
                  image={character.Image}
                  character={character.Name}
                  description={character.Description}
                  onClick={() => this.handleClick(character)}
                  isSelected={isSelected}
                />
              ) : (
                  <CharacterBox
                    image={character.Image}
                    character={character.Name}
                    description={character.Description}
                    onClick={() => this.handleClick(character)}
                  />
                )}
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
                      {this.renderSelectedCharacters(this.state.prio1)}
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <p>{"Character 2"}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      {this.renderSelectedCharacters(this.state.prio2)}
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <p>{"Character 3"}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      {this.renderSelectedCharacters(this.state.prio3)}
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

        <row>
          <a
            href="/Eigenschaften"
            className="btn btn-outline-secondary float-right"
            role="button"
          >
            Weiter
            </a>
        </row>

      </div>
    );
  }
}

export default Character;
