import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDocumentTitle } from "./custom-hooks";
import { AllRoutes } from "./routes";
import { Navbar, PlaylistModal } from "./components";
import { useModal } from "./contexts";

function App() {
  useDocumentTitle("Lens Play");

  const { showModal } = useModal();

  return (
    <>
      <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
      {showModal && <PlaylistModal />}
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
