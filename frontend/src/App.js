import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Routes.js";
import { SignupPage } from "./Routes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
