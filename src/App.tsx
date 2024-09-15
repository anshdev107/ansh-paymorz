import { Navigate, Route, Routes } from "react-router-dom";
import Individual from "./components/Individual";
import SignUp from "./pages/SignUp";
import SignUpComp from "./components/SignUpComp";
import SignUpComp2 from "./components/SignUp2Comp2";
import CodeVerification from "./pages/CodeVerification";
import Home from "./pages/Home";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SignUp>
              <SignUpComp />
            </SignUp>
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUp>
              <SignUpComp2 />
            </SignUp>
          }
        />
        <Route
          path="/login"
          element={
            <SignUp>
              <Login />
            </SignUp>
          }
        />
        <Route
          path="/individual"
          element={
            <SignUp>
              <Individual />
            </SignUp>
          }
        />
        <Route path="/code-verification" element={<CodeVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
