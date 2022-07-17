import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ResgiterPage from "./Pages/ResgiterPage";
import LoginPage from "./Pages/LoginPage";
import MessagesPage from "./Pages/MessagesPage";
import MessagesDeletePage from "./Pages/MessagesDeletePage";
import MessagesEditPage from "./Pages/MessagesEditPage";
import Default from "./layouts/Default";
import Auth from "./layouts/Auth";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Default>
              <Home />
            </Default>
          }
        />
        <Route
          path="/messages"
          element={
            <Default>
              <MessagesPage />
            </Default>
          }
        />
        <Route
          path="/messages/:messageId/delete"
          element={
            <Default>
              <MessagesDeletePage />
            </Default>
          }
        />
        <Route
          path="/messages/:messageId/edit"
          element={
            <Default>
              <MessagesEditPage />
            </Default>
          }
        />
        <Route
          path="/register"
          element={
            <Auth>
              <ResgiterPage />
            </Auth>
          }
        />
        <Route
          path="/login"
          element={
            <Auth>
              <LoginPage />
            </Auth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
