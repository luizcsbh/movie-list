import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import { Favorites } from "./views/Favorites";

export const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
);