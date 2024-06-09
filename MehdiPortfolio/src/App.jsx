import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Routes from "./Routes";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <ToastContainer/>
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
