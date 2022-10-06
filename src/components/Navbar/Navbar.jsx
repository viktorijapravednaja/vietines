import { Link } from "react-router-dom";

//Styles
import "./Navbar.css";

const Navbar = ({ style, style2 }) => {
  return (
    <nav className={style ? "whiteText" : "hide"}>
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
    </nav>
  );
};

export default Navbar;
