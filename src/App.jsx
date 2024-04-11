import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FindWork from "./pages/FindWork";

export const AppContext = createContext();


function App() {

  return (
    <div>
          <AppContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/find-work" element={<FindWork />} />

        </Routes>
      </BrowserRouter>
      </AppContext.Provider>

    </div>
  );
}

export default App;
