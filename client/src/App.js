import { useSelector , useDispatch} from "react-redux";
import SignUp from "./auth/Signup";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";

function App() {
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
    </Router>
  </div>
  );
}

export default App;
