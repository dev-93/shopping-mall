import React,{Component} from "react";
import Slider from "react-slick";
import "./css/slider.css"
 
export default class Fade  extends Component {
  render() {
    const settings = {
      className: "bt-item",
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={require("../slider/img/slider_test-1.jpg")} alt="test-1"/>
          </div>
          <div>
            <img src={require("../slider/img/slider_test-2.jpg")} alt="test-2"/>
          </div>
          <div>
            <img src={require("../slider/img/slider_test-3.jpg")} alt="test-3" />
          </div>
          <div>
            <img src={require("../slider/img/slider_test-4.jpg")} alt="test-4" />
          </div>
          <div>
            <img src={require("../slider/img/slider_test-5.jpg")} alt="test-5" />
          </div>
          <div>
            <img src={require("../slider/img/slider_test-6.jpg")} alt="test-6" />
          </div>
        </Slider>
      </div>
    );
  }
}