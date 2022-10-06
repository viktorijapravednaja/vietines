//Style
import "./HomePage.css";

//Components
import Title from "../../components/Title/Title";
import video from "../../video/video.mp4";
import EndSection from "../../components/EndSection/EndSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Title style={"titleStyleMain"} />
        <div className="homePageContainer">
          <video className="videoContainer" autoPlay loop muted={true}>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <EndSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
