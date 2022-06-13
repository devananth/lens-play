import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Liked,
  Playlist,
  WatchLater,
  Login,
  SignUp,
  History,
} from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export { AllRoutes };
