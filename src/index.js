import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  HistoryProvider,
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
              <HistoryProvider>
                <PlaylistProvider>
                  <LikesProvider>
                    <WatchLaterProvider>
                      <App />
                    </WatchLaterProvider>
                  </LikesProvider>
                </PlaylistProvider>
              </HistoryProvider>
            </AuthProvider>
          </VideoProvider>
        </CategoryProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
