import { Routes, Route } from "react-router-dom";
import { MockApi } from "../components";
import {
  Home,
  Explore,
  Liked,
  Playlists,
  WatchLater,
  Login,
  SignUp,
  History,
  PlaylistDetails,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:id" element={<PlaylistDetails />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export { AllRoutes };
