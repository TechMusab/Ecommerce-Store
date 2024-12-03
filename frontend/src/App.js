import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Routes.js";
import { SignupPage } from "./Routes.js";
import { ActivationPage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import Store from "./redux/store";
import { Homepage } from "./Routes.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage/>}></Route>
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
