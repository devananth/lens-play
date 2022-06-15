import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDocumentTitle } from "./custom-hooks";
import { AllRoutes } from "./routes";
import { Navbar } from "./components";

function App() {
  useDocumentTitle("Lens Play");
  return (
    <>
      <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
