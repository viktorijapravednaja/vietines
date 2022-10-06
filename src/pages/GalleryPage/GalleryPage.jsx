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

const GalleryPage = () => {
  let images = [
    { id: 1, imgSrc: Img1 },
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img4 },
    { id: 5, imgSrc: Img5 },
    { id: 6, imgSrc: Img6 },
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
