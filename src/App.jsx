
import React from "react";
import Landing from "./Components/Landing";
import Details from "./Working/Details";
import Chatting from "./Chatting/Chatting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={Landing()} />
            <Route path="details" element={<Details />} />
            <Route path="chatting" element={<Chatting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
