import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

//Components
import Navbar from "../Navbar/Navbar";

//Styles
import "./Header.css";

//Assets
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [openNav, setopenNav] = useState(false);

  const showNavigation = () => {
    setopenNav(!openNav);
  };
  const handleClickAway = () => {
    setopenNav(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <header className="headerContainer">
          <i onClick={showNavigation} className="headerIconStyle">
            <GiHamburgerMenu />
          </i>
        </header>
        <Navbar style={openNav} />
      </div>
    </ClickAwayListener>
  );
};

export default Header;
