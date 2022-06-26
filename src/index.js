import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  LikesProvider,
  ModalProvider,
  PlaylistProvider,
  VideoProvider,
  WatchLaterProvider,
} from "./contexts";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <CategoryProvider>
          <VideoProvider>
            <AuthProvider>
              <PlaylistProvider>
                <LikesProvider>
                  <WatchLaterProvider>
                    <App />
                  </WatchLaterProvider>
                </LikesProvider>
              </PlaylistProvider>
            </AuthProvider>
          </VideoProvider>
        </CategoryProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
