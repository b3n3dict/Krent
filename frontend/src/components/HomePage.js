import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { LinkContainer } from "react-router-bootstrap";
import Camera from "../img/cam-trans.png";
import Mac from "../img/mac-trans.png";
import Controller from "../img/controller-trans.png";
import Couch from "../img/couch-trans.png";
import Iphone11 from "../img/iphone11-trans.png";
import Desktop from "../img/desktop-trans.png";
import Iphones from "../img/iphone-trans.png";
import AOS from "aos";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const [image, setImage] = useState(Mac);
  const [circleColor, setCircleColor] = useState("#2176bd");
  const imgSlider = (imageUrl) => {
    setImage(imageUrl);
  };
  const circleColorChange = (color) => {
    // const circle = document.querySelector(".circle");
    // circle.style.background = color;
    setCircleColor(color);
  };
  return (
    <div className="section">
      <div className="circle" style={{ backgroundColor: circleColor }}></div>

      <div className="content">
        <div className="textBox">
          <h2>
            The Best Marketers are
            <br />
            Satisfied <span>Customers</span>
          </h2>
          <p>
            Everybody got into the rugged outdoors business and into lifestyle
            merchandising and so forth and so on. And everybody was getting into
            catalogs and e-commerce and - you name it. It was just intense.
          </p>
          <Link to="#" className="content-button">
            Learn More{" "}
          </Link>
        </div>
        <div className="imgBox">
          <img src={image} className="starbucks" id="starbucks" alt="" />
        </div>
      </div>
      <ul className="thumb" id="thumbImg">
        <li>
          <LinkContainer to="/product/600bedc2baba0b4804ca72df">
            <img
              src={Camera}
              onMouseOver={() => {
                imgSlider(Camera);
                circleColorChange("#2176bd");
              }}
              alt=""
            />
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to="/product/600be827cabbed2f002d5225">
            <img
              src={Mac}
              onMouseOver={() => {
                imgSlider(Mac);
                circleColorChange("#23689b");
              }}
              alt=""
            />
          </LinkContainer>
        </li>
        <li className="mob__res">
          <LinkContainer to="/product/600c0aa0a8e8774f6c6652e1">
            <img
              src={Controller}
              onMouseOver={() => {
                imgSlider(Controller);
                circleColorChange("#b3b3cc");
              }}
              alt=""
            />
          </LinkContainer>
        </li>
        <li id="mob__res4">
          <LinkContainer to="/product/5fd3452e49721054ac0e5ca6">
            <img
              src={Iphone11}
              onMouseOver={() => {
                imgSlider(Iphone11);
                circleColorChange("#666699");
              }}
              alt=""
            />
          </LinkContainer>
        </li>{" "}
        <li id="mob__res1">
          <img
            src={Desktop}
            onMouseOver={() => {
              imgSlider(Desktop);
              circleColorChange("#3d3d5c");
            }}
            alt=""
          />
        </li>{" "}
        <li>
          <img
            id="mob__res2"
            src={Couch}
            onMouseOver={() => {
              imgSlider(Couch);
              circleColorChange("#017143");
            }}
            alt=""
          />
        </li>{" "}
        <li>
          <img
            id="mob__res3"
            src={Iphones}
            onMouseOver={() => {
              imgSlider(Iphones);
              circleColorChange("#ff0000");
            }}
            alt=""
          />
        </li>
      </ul>
      {/* <ul class="sci">
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default HomePage;
