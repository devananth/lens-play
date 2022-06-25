import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  LikesProvider,
  VideoProvider,
} from "./contexts";
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
            <LikesProvider>
              <App />
            </LikesProvider>
          </AuthProvider>
        </VideoProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
