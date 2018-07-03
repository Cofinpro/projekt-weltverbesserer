import Slider from "react-slick";
import React, { Component } from "react";
import CharacterBox from "../../components/CharacterBoxes/CharacterBox";
import { Characters } from "./Characters";
import SelectedCharacterBox from "../../components/CharacterBoxes/SelectedCharacterBox";


class Character extends Component {
    constructor(props) {
        super(props);

        var characters = [Characters.Planer, Characters.Visionaer, Characters.Macher, Characters.Kommunikator, Characters.Checker, Characters.Energiebuendel]

        this.state = {
            prio1: null,
            prio2: null,
            prio3: null,
            characters: characters,
        };
    }

    handleClick(toSetPrio) {

        if (!this.state.prio1) {
            this.setState({ prio1: toSetPrio });
            this.removeCharacterFromList(toSetPrio)
        } else {
            if (!this.state.prio2) {
                this.setState({ prio2: toSetPrio });
                this.removeCharacterFromList(toSetPrio)
            } else {
                if (!this.state.prio3) {
                    this.setState({ prio3: toSetPrio });
                    this.removeCharacterFromList(toSetPrio)
                }
            }
        }
    }


    removeCharacterFromList(toRemove) {
        var newCharacters = [...this.state.characters];
        var index = newCharacters.indexOf(toRemove)
        newCharacters.splice((index), 1);
        this.setState({ characters: newCharacters });
    }

    removeSelectedCharacter(toRemove) {
        var newCharacters = [...this.state.characters];
        newCharacters.push(toRemove);
        this.setState({ characters: newCharacters });

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
        console.log('aufgerufen empty')
        console.log(this.state.prio1)
        console.log(this.state.prio2)
        console.log(this.state.prio3)
        if (!this.state.prio1) {
            console.log('prio1 empty')
            this.setState({ prio1: this.state.prio2 });
            this.setState({ prio2: this.state.prio3 });
            this.setState({ prio3: null })
        }

        if (!this.state.prio2) {
            console.log('prio2 empty')
            this.setState({ prio2: this.state.prio3 });
            this.setState({ prio3: null })
        }

    }


    renderCharacters() {
        var characters = this.state.characters.sort((a, b) => a.Key - b.Key).map((character) => {
            return (
                <div key={character.Key}>
                    <CharacterBox image={character.Image} character={character.Name} onClick={() => this.handleClick(character)} />
                </div>
            )
        })
        return characters
    }

    renderSelectedCharacters(selectedCharacter) {
        if (!selectedCharacter) {
            return (
                <div>
                    Bitte Charakter auswählen
                 </div>
            );
        }
        return (
            <div>
                <SelectedCharacterBox Image={selectedCharacter.Image} Name={selectedCharacter.Name} onClick={() => this.removeSelectedCharacter(selectedCharacter)} />
            </div>
        )
    }


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };



        return (
            <div className='content container' >
                <div class="row">
                    <div class="col-sm">
                        <Slider {...settings}>
                            {this.renderCharacters()}
                        </Slider>
                    </div>
                </div>
                <div>
                    prio 1
                    {this.renderSelectedCharacters(this.state.prio1)}
                </div>
                <div>
                    prio 2
                    {this.renderSelectedCharacters(this.state.prio2)}
                </div>
                <div>
                    prio 3
                    {this.renderSelectedCharacters(this.state.prio3)}
                </div>
                <row>
                    <a href="/eigenschaften" class="btn btn-outline-secondary float-right" role="button">Weiter</a>
                </row>
            </div>
        );
    }
}

export default Character;