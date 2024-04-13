import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FindWork from "./pages/FindWork";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/find-work" element={<FindWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
