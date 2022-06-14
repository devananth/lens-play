import "./App.css";
import { useDocumentTitle } from "./custom-hooks";
import { AllRoutes } from "./routes";
import { Navbar, Drawer } from "./components";

function App() {
  useDocumentTitle("Lens Play");
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
