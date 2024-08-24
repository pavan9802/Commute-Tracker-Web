import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector} from "react-redux";
import HomePage from "../Pages/HomePage";
export default function PrivateRoute() {

  const state = useSelector((state) => state);

  return state.userInfo.userEmail !=="" && state.userInfo.uid !=="" ? <HomePage/> : <Navigate to="/login" />;
}