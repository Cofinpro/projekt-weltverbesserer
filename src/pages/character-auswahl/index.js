import Slider from "react-slick";
import React, { Component } from "react";
import CharacterBox from "../../components/CharacterBoxes/CharacterBox";
import Visionaer from '../../img/Visionaer.jpg';
import Checker from '../../img/Checker.jpg';
import Energiebuendel from '../../img/Energiebuendel.jpg';
import Kommunikator from '../../img/Kommunikator.jpg';
import Macher from '../../img/Macher.jpg';
import Planer from '../../img/Planer.jpg';
import SelectedCharacterBox from "../../components/CharacterBoxes/SelectedCharacterBox";

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prio1: <SelectedCharacterBox />,
        };
    }

    handleClick(toSetPrio1) {
        /* var prioToSet = this.state.prio1.slice(); */
        var prioToSet = <SelectedCharacterBox toShow={toSetPrio1} />;
        this.setState({ prio1: toSetPrio1 });
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        const planer = <CharacterBox image={Planer} character={'Planer'} onClick={() => this.handleClick(planer)} />
        const visionaer = <CharacterBox image={Visionaer} character={'Visionär'} onClick={() => this.handleClick(visionaer)} />
        const macher = <CharacterBox image={Macher} character={'Macher'} onClick={() => this.handleClick(macher)} />
        const kommunikator = <CharacterBox image={Kommunikator} character={'Kommunikator'} onClick={() => this.handleClick(kommunikator)} />
        const checker = <CharacterBox image={Checker} character={'Checker'} onClick={() => this.handleClick(checker)} />
        const energiebuendel = <CharacterBox image={Energiebuendel} character={'Energiebündel'} onClick={() => this.handleClick(energiebuendel)} />
        return (
            <div className='content container'>
                <div class="row">
                    <div class="col-sm">
                        <Slider {...settings}>
                            <div>
                                {planer}
                            </div>
                            <div>
                                {visionaer}
                            </div>
                            <div>
                                {macher}
                            </div>
                            <div>
                                {kommunikator}
                            </div>
                            <div>
                                {checker}
                            </div>
                            <div>
                                {energiebuendel}
                            </div>
                        </Slider>
                    </div>
                </div>
                <div class="row">
                    <div class=".col-6 .col-md-4">
                        {this.state.prio1}
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