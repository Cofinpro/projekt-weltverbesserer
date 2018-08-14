
import React, { Component } from "react";
import Ash from '../../img/ash_normal.png';
import Pokeball from '../../img/Pokeball.png';
import Pokemon from 'pokemon-images';
import Slider from "rc-slider";
import "./style.css";



class PokemonPage extends Component {

  constructor(props) {
    super(props);
    this.selectedValue = 3;

    this.state = {
      pokemonsToShow: []
    }
  }

  sliderInputHandler(value) {
    this.selectedValue = value;
  }

  nextLevel() {

    if(this.state.pokemonsToShow.length < 6){
    this.setState({
      pokemonsToShow: [...this.state.pokemonsToShow, Pokemon.getSprite("blastoise")]
    })
  }

}

renderPokemons() {

  var pokemonToShow = this.state.pokemonsToShow
    .map(pokemonsToShow => {
      console.log(pokemonsToShow)
      return (

        <img
          src={pokemonsToShow}
          alt="pic not found"
          className={"border-warning d-block mx-auto pokeball float-right"}
        />

      );
    });
  return pokemonToShow;
}

render() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12">
          {this.renderPokemons()}
        </div>
      </div>
      <div className="row top-buffer">
        <div className="col-12 align-content-center"> 
          <div>
            <img
              src={Ash}
              alt="pic not found"
              className={"d-block mx-auto change"}
            />
          </div>
        </div>
      </div>
      <div className="row top-buffer">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
              <div className="text-center">
                <p>aufgeschlossen/kommunikativ</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">trifft nicht zu</div>
            <div className="col-sm-6">
              <Slider min={0} max={10} defaultValue={3} 
                onAfterChange={(value) => this.sliderInputHandler(value)}
              />
            </div>
            <div className="col-sm-3">trifft zu</div>
          </div>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6 text-center">
              <button type="button" className="btn inputsm" onClick={() => this.nextLevel()}>Übernehmen</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
}
export default PokemonPage;
