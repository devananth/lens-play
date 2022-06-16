import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, CategoryProvider, VideoProvider } from "./contexts";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <VideoProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </VideoProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
