import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//Style
import "./PlaylistPage.css";

//Components
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import EndSection from "../../components/EndSection/EndSection";
import Footer from "../../components/Footer/Footer";

//Assets
import Disc from "../../images/disc.png";

const PlaylistPage = () => {
  const discs = [
    {
      id: "1",
      text: "MELANCHOLIC EATING",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1140480496&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "2",
      text: "MUNCHIES BEFORE RAVING",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1140490195&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "3",
      text: "Việt Nam Ơi",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1498439935&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "4",
      text: "FALL DAY",
      url: " https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1497919006&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "5",
      text: "WARM UP",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1487403838&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "6",
      text: "AFTER 7PM",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1487353066&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "7",
      text: "SEKMADIENIO POPIETĖ",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1423455862&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "8",
      text: "LUNCH RICE WITH CARAMELISED PORK",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1422862615&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "9",
      text: "THURSDAY LUNCH",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1407593899&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },

    {
      id: "10",
      text: "SMOOTH WORKING DAY",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1381019632&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "11",
      text: "VIETNAMESE BLOOD",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1338804241&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "12",
      text: "KITCHEN ZONE OUT",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1313834443&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "13",
      text: "BUSY HOURS",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1309017403&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "14",
      text: "LUKRECIJUS AZERBAIDŽIANE",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1140517468&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "15",
      text: "DARK VIETNAMESE COFFEE",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1140498631&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      id: "16",
      text: "ELEGANT BEER DRINKING",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1140492850&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  ];

  const [index, setIndex] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  console.log(index);
  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(discs.length - 1);
    }
    setMoveLeft(!moveLeft);
  };
  const handleRight = () => {
    if (index < discs.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setMoveRight(!moveRight);
  };

  return (
    <>
      <Header />
      <Link to="/">
        <Title style={"titleStyle"} />
      </Link>
      <div className="container">
        <div className="carousel">
          <motion.div
            className="disc"
            onClick={handleLeft}
            animate={{ x: moveLeft ? [0, 20, 20, 0] : [0, 21, 21, 0] }}
          >
            <img className=" disc--left" src={Disc} alt="" />
          </motion.div>
          <motion.div
            className="disc disc--active"
            animate={{ rotate: [0, 360, -360, 0] }}
            transition={{ repeat: Infinity }}
          >
            <img className="  " src={Disc} alt="" />
          </motion.div>

          <motion.div
            className="disc "
            onClick={handleRight}
            animate={{ x: moveRight ? [0, -20, -20, 0] : [0, -21, -21, 0] }}
          >
            <img className="disc--right" src={Disc} alt="" />
          </motion.div>
        </div>
        <div className="playerContainer">
          <p className="disc-text">{discs[index].text}</p>

          <iframe
            className="player"
            frameborder="no"
            allow="autoplay"
            src={discs[index].url}
          ></iframe>
        </div>
      </div>

      <EndSection />
      <Footer />
    </>
  );
};

export default PlaylistPage;
