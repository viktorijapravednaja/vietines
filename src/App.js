import "./App.css";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import VietShopPage from "./pages/VietShopPage/VietShopPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="menu" element={<MenuPage />}></Route>
        <Route path="gallery" element={<GalleryPage />}></Route>
        <Route path="playlist" element={<PlaylistPage />}></Route>
        <Route path="vietshop" element={<VietShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
