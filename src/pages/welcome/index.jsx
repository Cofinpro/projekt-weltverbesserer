import React from "react";
import ReactDOM from "react-dom";
import welcome_image from "../../img/welcome_pic.jpg";
import "./index.css";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div class="row">
            <div class="col-sm-3" />
            <div class="col-sm-6">
              
                {/* <img
                  src={welcome_image}
                  class="img-circle"
                  width="700"
                  height="630"
                  style={{width:'100%', position: 'relative'}}
                /> */}
            
              <div class="text-center">
                Du willst nicht nur eine Nummer sein, sondern von Anfang an
                mitentscheiden?
              </div>
              <div class="text-center margin-10-top">
                Du willst gemeinsam mit deinen Kollegen an einem Strang ziehen
                und etwas erreichen?
              </div>
              <div class="text-center margin-10-top">
                Du willst in einem Unternehmen arbeiten, in dem Kompetenz über
                Hierarchie steht?
              </div>
              <div class="text-center margin-10-top">
                Du willst dich mit deinen Kollegen auch mal abends beim
                gemeinsamen Zocken messen?
              </div>
              <div class="text-center margin-10-top">
                Du willst in einer Firma arbeiten die den Mitarbeitern gehört?
              </div>
              <div class="text-center margin-10-top">
                Du willst in einer Firma arbeiten die den Mitarbeitern gehört?
              </div>
              <div class="text-center margin-10-top">
                Dann bist du bei uns genau richtig. Auf den folgenden Seiten
                kannst du uns ein paar Fragen zu deiner Person beantworten und
                deinem Traumarbeitgeber ein Stück näher kommen. ;)
              </div>
              <div class="text-center margin-10-top">
                <a
                  href="/charakter"
                  class="btn btn-outline-secondary center"
                  role="button"
                >
                  Start
                </a>
              </div>
            </div>
            <div class="col-sm-3"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
