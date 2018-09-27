import "./index.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import eigenschaften_image from "../../img/eigenschaften_image.jpg";
import ScrollableAnchor from "react-scrollable-anchor";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import ThumbsOkay from '../../img/Thumb_okay.jpeg';
import ThumbsPasst from '../../img/Thumb_passt.jpeg';
import ThumbsSchlecht from '../../img/Thumb_schlecht.jpeg';
import Ash from '../../img/ash_normal.png';

const bodyScrollLock = require("body-scroll-lock");
var FontAwesome = require('react-fontawesome');


function EigenschaftenFrage(props) {


 // bodyScrollLock.disableBodyScroll(this);
  return (
    <div>
      <div class={"row " + props.content.MarginTop}>
        <div class="col-sm-3" />
        <div class="col-sm-6">
          <div class="row">
            <ScrollableAnchor id={props.content.section}>
              <div />
            </ScrollableAnchor>
            <div class="col-sm-12 text-center margin-300-top">
              {props.content.frage}
            </div>
          </div>
        </div>
        <div class="col-sm-3"/>
      </div>
      <div class="row margin-50-top">
        <div class="col-sm-2 d-flex justify-content-center">
        <a href={props.content.backSection} class="text-deko"> 
        <FontAwesome name='angle-up' />
        </a>
        <div>
        </div>
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-2 text-center">
              <a href={props.content.nextSection} class="text-deko">
                keine Angabe
              </a>
            </div>
            <div class="col-sm-2 text-center">
              <a href={props.content.nextSection} class="text-deko">
                trifft nicht zu
              </a>
            </div>
            <div class="col-sm-2 text-center">
              <a href={props.content.nextSection} class="text-deko">
                trifft minimal zu
              </a>
            </div>
            <div class="col-sm-2 text-center">
              <div>
                <a href={props.content.nextSection} class="text-deko">
                  trifft größt. zu
                </a>
              </div>
            </div>
            <div class="col-sm-2 text-center">
              <div>
                <a href={props.content.nextSection} class="text-deko">
                  trifft zu
                </a>
              </div>
            </div>
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
      
        <div class="row">
      <div class="col-sm-1 position">
          {/* <img
              src={Ash}
              alt="pic not found"
              className={"d-block mx-auto change position"}
            /> */}
      </div>

      <div class="col-sm-11">
        <EigenschaftenFrage
          content={{
            frage:
              "Ich kann auch gut mit Menschen auskommen / Menschen respektieren, selbst wenn unsere Ansichten weit auseinander liegen.",
            nextSection: "#section2",
            section: "section1",
            MarginTop: "margin-10-top",
            backSection:"#section1"
          }}
        />

        <EigenschaftenFrage
          content={{
            frage:
              "Ich sage offen meine Meinung und verstehe Kritik als Chance zur Verbesserung.",
            nextSection: "#section3",
            section: "section2",
            MarginTop: "margin-500-top",
            backSection:"#section1"
          }}
        />

        <EigenschaftenFrage
          content={{
            frage:
              "Erfolg auf Kosten anderer sollte eine Ausnahme bleiben.",
            nextSection: "#section4",
            section: "section3",
            MarginTop: "margin-500-top",
            backSection:"#section2"
          }}
        />

        <EigenschaftenFrage
          content={{
            frage:
              "Clean Code und wartbarer Code sind mir wichtiger als ein schnelles Ergebnis.",
            nextSection: "#section5",
            section: "section4",
            MarginTop: "margin-500-top",
            backSection:"#section3"
          }}
        />

        <EigenschaftenFrage
          content={{
            frage:
              "Eine durchdachte Technologieauswahl und Architektur sind wichtig für erfolgreiche Softwareentwicklung.",
            nextSection: "#section6",
            section: "section5",
            MarginTop: "margin-500-top",
            backSection:"#section4"
          }}
        />

        <EigenschaftenFrage
          content={{
            frage:
              "Ich fühle mich in der Welt von JavaEE und den aktuellen Webtechnologien wie Angular Zuhause.",
            nextSection: "#section7",
            section: "section6",
            MarginTop: "margin-500-top",
            backSection:"#section5"
          }}
        />

          <EigenschaftenFrage
          content={{
            frage:
              "Manchmal fühle ich mich wie ein Übersetzer von Techie-Sprech zu Hochdeutsch.",
            nextSection: "#section8",
            section: "section7",
            MarginTop: "margin-500-top",
            backSection:"#section6"
          }}
        />

          <EigenschaftenFrage
          content={{
            frage:
              "Ich habe Spaß daran, gemeinsam zu entwickeln und mich mit anderen über die Arbeit auszutauschen. Dabei kann ich durchaus noch etwas von erfahrenen Entwicklern lernen und anderen helfen.",
            nextSection: "#section9",
            section: "section8",
            MarginTop: "margin-500-top",
            backSection:"#section7"
          }}
        />

          <EigenschaftenFrage
          content={{
            frage:
              "Zur Beratung gehört für mich, dass ich mich den Gegebenheiten des Kunden anpasse. Da komme ich auch mit Anzug oder Kostüm zur Arbeit.",
            nextSection: "#section10",
            section: "section9",
            MarginTop: "margin-500-top",
            backSection:"#section8"
          }}
        />

          <EigenschaftenFrage
          content={{
            frage:
              "Ich nehme die Dinge in die Hand, löse selbstständig Probleme und fühle mich für das gesamte Ergebnis verantwortlich.",
            nextSection: "#section11",
            section: "section10",
            MarginTop: "margin-500-top",
            backSection:"#section9"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "Die Finanzwelt und ihre akuellen Trends (bspw. Digitalisierung) finde ich spannend.",
            nextSection: "#section12",
            section: "section11",
            MarginTop: "margin-500-top",
            backSection:"#section10"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "Ich beschäftige mich gerne mit den aktuellen Technologien und Frameworks und bin erst dann richtig zufrieden, wenn ich sie selbst ausprobieren konnte.",
            nextSection: "#section13",
            section: "section12",
            MarginTop: "margin-500-top",
            backSection:"#section11"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "Webdesign, Frontend, App-Entwicklung, das ist genau mein Ding.",
            nextSection: "#section14",
            section: "section13",
            MarginTop: "margin-500-top",
            backSection:"#section12"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "Ich bin Fullstack Entwickler und stelle mich jeder Herausforderung.",
            nextSection: "#section15",
            section: "section14",
            MarginTop: "margin-500-top",
            backSection:"#section13"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "Datenbanken, Services, Algorithmen, da macht mir so schnell keiner was vor.",
            nextSection: "#section16",
            section: "section15",
            MarginTop: "margin-500-top",
            backSection:"#section14"
          }}
        />

         <EigenschaftenFrage
          content={{
            frage:
              "In meiner Heimat fühle ich mich wohl, viel unterwegs sein ist nicht so mein Ding.",
            nextSection: "#section16",
            section: "section16",
            MarginTop: "margin-500-top",
            backSection:"#section15"
          }}
        />
        </div>
      </div>
      
    );
  }
}
export default Eigeschaften;
