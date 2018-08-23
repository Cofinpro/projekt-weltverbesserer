import "./index.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import eigenschaften_image from "../../img/eigenschaften_image.jpg";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

function NameSlider(props) {
  return (
    <div class="row margin-50-top">
      <div class="col-sm-1" />
      <div class="col-sm-8">
        <div class="row">
          <div class="col-sm-7" />
          <div class="col-sm-5">
            <div class="row">
              <div class="col-sm-2 text-center">
                <p>keine Angabe</p>
              </div>
              <div class="col-sm-2 text-center">
                <p>trifft nicht zu</p>
              </div>
              <div class="col-sm-2 text-center">
                <p>trifft minimal zu</p>
              </div>
              <div class="col-sm-2 text-center">
                <div>
                  <p>trifft halbw. zu</p>
                </div>
              </div>
              <div class="col-sm-2 text-center">
                <div>
                  <p>trifft größt. zu</p>
                </div>
              </div>
              <div class="col-sm-2 text-center">
                <div>
                  <p>trifft zu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-7 text-center">{props.content.frage}</div>
          <div class="col-sm-5">
            <Slider min={0} max={5} defaultValue={0} handle={handle} />
          </div>
        </div>
      </div>
    </div>
  );
}
const wrapperStyle = { width: 400, margin: 50 };

class Eigeschaften extends React.Component {
  render() {
    return (
      <div>
        <div class="text-center">
          <img
            src={eigenschaften_image}
            class="img-circle"
            width="304"
            height="236"
          />
        </div>

        <div className="col text-center top-buffer">
          <h2 className="h4 padding-sm-bottom">
            Folgende Eigenschaften beschreiben mich
          </h2>
        </div>
        <NameSlider
          content={{
            frage:
              "Gegenüber anderen Menschen bin ich in der Regel freundlich und zuvorkommend"
          }}
        />

        <NameSlider
          content={{
            frage:
              "Ein Berater muss auch mit Leuten zusammenarbeiten, deren Meinung er nicht teilt"
          }}
        />

          <NameSlider
          content={{
            frage:
              "Wenn jemand einen Vorschlag von mir kritisiert, bin ich schnell verunsichert"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Selbständigkeit ist mir persönlich wichtig"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Mich hält es nie lange an einem Ort, ich brauche Abenteuer"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Wenn andere von meiner Arbeit etwas haben finde ich das cool"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Gewissenhaftes Arbeiten ist für mich ganz natürlich"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Ich kann schon mal mit einer Notlüge leben"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Wenn ich über eine Sache ungefähr Bescheid weiss, dann reicht mir das. Den Rest lerne ich dann schon irgendwie"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Vor anderen zu präsentieren macht mir richtig Spaß"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Wenn ich ein Problem habe, das ich nicht lösen kann, dann beisse ich mich da so richtig rein"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Bevor ich etwas falsch mache, frage ich lieber mal um Hilfe"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Pünktlichkeit ist das halbe Leben"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Ich stehe auch mal für eine Freundin ein obwohl ich eigentlich nichts falsch gemacht hab"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Ich stehe anderen gerne mit Rat und Tat zu Seite"
          }}
        />

            <NameSlider
          content={{
            frage:
              "Ich bin auch mal bereit die 'extra mile' zu laufen "
          }}
        />

            <NameSlider
          content={{
            frage:
              "Spaß bei der Arbeit steht für mich im Vordergrund"
          }}
        />
      </div>
    );
  }
}
export default Eigeschaften;
