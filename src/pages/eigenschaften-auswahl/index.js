import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import eigenschaften_image from '../../img/eigenschaften_image.jpg';
import './index.css'

class Eigeschaften extends React.Component {
render() {
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
  
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={Slider.value}
            visible={dragging}
            placement="top"
            key={index}>
            <Handle value={value} {...restProps} />
        </Tooltip>
  
};
const wrapperStyle = { width: 400, margin: 50 };
return (
<div>
    <div class="text-center"> 
        <img src={eigenschaften_image} class="img-circle" width="304" height="236"/>
    </div>

      
        <div className="col text-center top-buffer">
              <h2 className="h4 padding-sm-bottom">
                Folgende Eigenschaften beschreiben mich
              </h2>
        </div>
        


    <div class="row top-buffer">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                <div class="text-center">
                    <p>aufgeschlossen/kommunikativ</p>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-3">trifft nicht zu</div>
            <div class="col-sm-6">
              <Slider min={0} max={10} defaultValue={3} />
            </div>
                <div class="col-sm-3">trifft zu</div>
             </div>
        </div>
    </div>

 <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                <div class="text-center">
                    <p>detailorientiert</p>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-3">trifft nicht zu</div>
            <div class="col-sm-6">
              <Slider min={0} max={10} defaultValue={3} />
            </div>
                <div class="col-sm-3">trifft zu</div>
             </div>
        </div>
    </div>

 <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                <div class="text-center">
                    <p>kreative</p>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-3">trifft nicht zu</div>
            <div class="col-sm-6">
              <Slider min={0} max={10} defaultValue={3} />
            </div>
                <div class="col-sm-3">trifft zu</div>
             </div>
        </div>
    </div>

    </div>
    )
    
}

}

export default Eigeschaften