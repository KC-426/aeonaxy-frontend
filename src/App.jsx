import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FindWork from "./pages/FindWork";
import BASE_URL from "../config"; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path={BASE_URL}
            exact={true}
            element={<Signup />}
          />
          <Route
            path={BASE_URL + "profile/:userId"}
            element={<Profile />}
          />
          <Route
            path={BASE_URL + "find-work"}
            element={<FindWork />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
