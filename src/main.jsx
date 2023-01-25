import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScreenFixedProvider from "./components/common/context/ScreenFixedProvider";
import LayoutProvider from "./contexts/LayoutProvider";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store/store.js";
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

const {REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID} = process.env

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutProvider>
      <ScreenFixedProvider>
          <BrowserRouter>
              <Auth0Provider
                  domain={REACT_APP_AUTH0_DOMAIN}
                  clientId={REACT_APP_AUTH0_CLIENT_ID}
                  redirectUri={window.location.origin}
              >
                  <Provider store={store}>
                      <App />
                  </Provider>
              </Auth0Provider>
          </BrowserRouter>
      </ScreenFixedProvider>
    </LayoutProvider>
  </React.StrictMode>
);
