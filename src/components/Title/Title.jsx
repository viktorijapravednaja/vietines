import { useEffect } from "react";

//Styles
import "./Title.css";

const Title = ({ style }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className={style}>VIET.INĖS</h1>
    </>
  );
};

export default Title;
