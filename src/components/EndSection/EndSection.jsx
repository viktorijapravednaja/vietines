import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./EndSection.css";

const EndSection = () => {
  return (
    <section className="endSectionContainer">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/vietshop">VIET.SHOP</Link>
        </li>
        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link to="/playlist">PLAYLIST</Link>
        </li>
      </ul>
      <div className="scheduleContainer">
        <h1>WORKING HOURS</h1>
        <h5>III-11:30-3PM/ 5PM-10PM</h5>
        <h5>IV-11:30-3PM/ 5PM-10PM</h5>
        <h5>V-11:30-3PM/5PM-11AM</h5>
        <h5>VI-12AM-11PM</h5>
        <h5>VII-12AM-9PM</h5>
      </div>
    </section>
  );
};

export default EndSection;
