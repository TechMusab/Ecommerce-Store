import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Routes.js";
import { SignupPage } from "./Routes.js";
import { ActivationPage } from "./Routes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage/>}></Route>
        <Route path="/activation/:url" element={<ActivationPage/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
