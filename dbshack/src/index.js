import React from "react";
import ReactDOM from "react-dom";
import UserAssetPage from "./Pages/UserAssetPage";
import UserProfilePage from "./Pages/UserProfilePage";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserAssetPage />
    <UserProfilePage />
  </React.StrictMode>,
  document.getElementById("root")
);
