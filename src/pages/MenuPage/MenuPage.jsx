import React from "react";
import { Link } from "react-router-dom";

//Style
import "./MenuPage.css";

//Components
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import EndSection from "../../components/EndSection/EndSection";
import Footer from "../../components/Footer/Footer";

//Assets
import Dragons from "../../images/dragons.png";
import Dragon from "../../images/dragon.png";

const MenuPage = () => {
  return (
    <>
      <Header />
      <Link to="/">
        <Title style={"titleStyle"} />
      </Link>
      <div className="flex">
        <div>
          <h2 className="txtWithShadow">MEAT OPTIONS</h2>
          <div>
            <h5 className="boldTxt">PHO &nbsp; 11.00&euro; </h5>
            <p className="descriptionTxt">
              beef soup with meatballs and rice noodles
            </p>
          </div>
          <div>
            <h5 className="boldTxt">BUN NEM &nbsp; 11.00&euro;</h5>
            <p className="descriptionTxt">
              rice noodle salad with pickled carrots and radishes, cucumber,
              beef, pork spring roll and herbs
            </p>
          </div>
          <div>
            <h5 className="boldTxt">NEM RAN &nbsp; 8.50&euro; </h5>
            <p className="descriptionTxt">
              pork springrolls with vegetables and noodles
            </p>
          </div>
        </div>
        <a href="https://www.instagram.com/funnynohoney/" target="_blank">
          <div>
            <img
              className="imgContainer showImg "
              src={Dragons}
              alt="menu"
              loading="lazy"
            />
          </div>

          <div>
            <img className="imgContainer hideTxt " src={Dragon} alt="menu" />
          </div>
        </a>
        <div>
          <h2 className="txtWithShadow">VEGAN OPTIONS</h2>
          <div>
            <h5 className="boldTxt">BUN RIEU &nbsp; 11.00&euro; </h5>
            <p className="descriptionTxt">
              tomato based rice noodle soup with mushrooms and tofu
            </p>
          </div>

          <div>
            <h5 className="boldTxt">BUN CHAY &nbsp; 11.00&euro;</h5>
            <p className="descriptionTxt">
              rice noodle salad with pickled carrots and radishes, cucumber,
              tofu, vegan spring roll and herbs
            </p>
          </div>
          <div>
            <h5 className="boldTxt">NEM CHAY &nbsp; 8.50&euro; </h5>
            <p className="descriptionTxt">
              vegan springrolls with peanuts and vegetables
            </p>
          </div>
        </div>
        <div>
          <a href="https://www.instagram.com/funnynohoney/" target="_blank">
            <div>
              <img
                className="imgContainer hideTxt rotateImg"
                src={Dragon}
                alt="menu"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="center">
        <h2 className="txtWithShadow">FISH OPTIONS</h2>
        <div>
          <h5 className="boldTxt">GOI CUON &nbsp; 10.00&euro; </h5>
          <p className="descriptionTxt">summer rolls with shrimps</p>
        </div>

        <div>
          <h5 className="boldTxt">GOI XOAI TOM &nbsp; 12.00&euro;</h5>
          <p className="descriptionTxt">
            spicy mango salad with caramelised shrimps and shrimp chips
          </p>
        </div>
      </div>

      <EndSection />
      <Footer />
    </>
  );
};

export default MenuPage;
