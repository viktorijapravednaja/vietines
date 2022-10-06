import React from "react";

//Style
import "../../components/Modal/Modal.css";

//Components
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

const VietShopPage = () => {
  return (
    <main>
      <Header />
      <Title style={"titleStyle"} />
      <Modal />
      <div className="productContainer"></div>
      <Footer />
    </main>
  );
};

export default VietShopPage;
