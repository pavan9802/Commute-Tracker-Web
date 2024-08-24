import { useSelector , useDispatch} from "react-redux";
import SignUp from "./auth/Signup";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import React, { useEffect } from "react";
import { auth } from "./auth/Firebase";
import { updateUserInfo } from "./actions/actions";
import PrivateRoute from "./auth/PrivateRoute";


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(updateUserInfo({
          "userEmail":user.email,
          "uid": user.uid
        }))
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
    <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute/>} /> 
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
    </Router>
  </div>
  );
}

export default App;
