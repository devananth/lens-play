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
import { ProtectedRoutes } from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export { AllRoutes };
