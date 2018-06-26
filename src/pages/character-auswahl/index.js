import Slider from "react-slick";
import React, { Component } from "react";
import CharacterBox from "../../components/CharacterBoxes/CharacterBox";
import { Characters } from "./Characters";
import SelectedCharacterBox from "../../components/CharacterBoxes/SelectedCharacterBox";


class Character extends Component {
    constructor(props) {
        super(props);

        const planer = <CharacterBox image={Characters.Planer.Image} character={Characters.Planer.Name} onClick={() => this.handleClick(Characters.Planer)} />
        const visionaer = <CharacterBox image={Characters.Visionaer.Image} character={'Visionär'} onClick={() => this.handleClick(Characters.Visionaer)} />
        const macher = <CharacterBox image={Characters.Macher.Image} character={'Macher'} onClick={() => this.handleClick(Characters.Macher)} />
        const kommunikator = <CharacterBox image={Characters.Kommunikator.Image} character={'Kommunikator'} onClick={() => this.handleClick(Characters.Kommunikator)} />
        const checker = <CharacterBox image={Characters.Checker.Image} character={'Checker'} onClick={() => this.handleClick(Characters.Checker)} />
        const energiebuendel = <CharacterBox image={Characters.Energiebuendel.Image} character={'Energiebündel'} onClick={() => this.handleClick(Characters.Energiebuendel)} />

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
            this.setState({ prio1: <SelectedCharacterBox Image={toSetPrio.Image} Name={toSetPrio.Name} /> });
            this.removeCharacterFromList(toSetPrio)
        } else {
            if (!this.state.prio2) {
                this.setState({ prio2: <SelectedCharacterBox Image={toSetPrio.Image} Name={toSetPrio.Name} /> });
                this.removeCharacterFromList(toSetPrio)
            } else {
                if (!this.state.prio3) {
                    this.setState({ prio3: <SelectedCharacterBox Image={toSetPrio.Image} Name={toSetPrio.Name} /> });
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

    renderCharacters() {
        var characters =this.state.characters.map((character) => {
            return (
                <div>
                    <CharacterBox image={character.Image} character={character.Name} onClick={() => this.handleClick(character)} />
                </div>
            )
        })
        return characters
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
                <div class="row">
                    <div class=".col-6 .col-md-4">
                        Prio 1
                        {this.state.prio1}
                    </div>
                </div>
                <div class="row">
                    <div class=".col-6 .col-md-4">
                        Prio 2
                        {this.state.prio2}
                    </div>
                </div>
                <div class="row">
                    <div class=".col-6 .col-md-4">
                        Prio 3
                        {this.state.prio3}
                    </div>
                </div>
                <row>
                    <a href="/eigenschaften" class="btn btn-outline-secondary float-right" role="button">Weiter</a>
                </row>
            </div>
        );
    }
}

    export default Character;