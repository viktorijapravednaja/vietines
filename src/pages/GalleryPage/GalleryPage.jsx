import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//Style
import "./GalleryPage.css";

//Components
import Title from "../../components/Title/Title";

//Assets
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";
import Img4 from "../../images/4.png";
import Img5 from "../../images/5.png";
import Img6 from "../../images/6.png";
import Img7 from "../../images/7.png";
import Img8 from "../../images/8.png";
import Img9 from "../../images/9.png";
import Img10 from "../../images/10.png";
import Img11 from "../../images/11.png";
import Img12 from "../../images/12.png";
import Img13 from "../../images/13.png";

const GalleryPage = () => {
  let images = [
    { id: 1, imgSrc: Img2 },
    { id: 2, imgSrc: Img13 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img6 },
    { id: 5, imgSrc: Img1 },
    { id: 6, imgSrc: Img8 },
    { id: 7, imgSrc: Img11 },
    { id: 8, imgSrc: Img12 },
    { id: 9, imgSrc: Img9 },
    { id: 10, imgSrc: Img5 },
    { id: 11, imgSrc: Img10 },
    { id: 12, imgSrc: Img4 },
    { id: 13, imgSrc: Img7 },
  ];

  return (
    <>
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Link to="/">
            <Title style={"galleryTitleStyle"} />
          </Link>
          <Masonry className="masonry" columns={3} gutter={3}>
            {images.map((image, i) => (
              <img
                loading="lazy"
                className="masonry-brick"
                key={i}
                src={image.imgSrc}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default GalleryPage;
