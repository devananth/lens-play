import "./App.css";
import { useDocumentTitle } from "./custom-hooks";
import { AllRoutes } from "./routes";

function App() {
  useDocumentTitle("Lens Play");
  return <AllRoutes />;
}

export default App;
