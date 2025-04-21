import "./App.css";
import { createContext } from "react";
import { BookFind } from "./assets/Pages/BookFind.jsx";
import { Home } from "./assets/Pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Registration } from "./assets/Pages/Registration";
import { BrowserRouter as Router } from "react-router-dom";
import { Writeus } from "./assets/Pages/Writeus";
import { GetStarted } from "./assets/Pages/GetStarted";
import { SignIn } from "./assets/components/SignIn.jsx";
import { SignUp } from "./assets/components/SignUp.jsx";
import { AdminSignUp } from "./assets/Admin/AdminSignUp.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import Profile from "./assets/Pages/Profile.jsx";
import AllSubjects from "./assets/Pages/AllSubjects.jsx";
import WebDCourse from "./assets/Pages/WebDCourse.jsx";
import ReactJsCourse from "./assets/Pages/ReactJsCourse.jsx";
import MachineLearning from "./assets/Pages/MachineLearning.jsx";
import SuccessPayment from "./assets/Pages/SuccessPayment.jsx";
import CancelPayment from "./assets/Pages/CancelPayment.jsx";
import StartLearning from "./assets/Pages/StartLearning.jsx";
import StartLearningOS from "./assets/Pages/StartLearningOS.jsx";
import StartLearningJAVA from "./assets/Pages/StartLearningJAVA.jsx";
import StartLearningCN from "./assets/Pages/StartLearningCN.jsx";

const ThemeContext = createContext(true);

function App() {
  const {isAuthentic} = useAuth();
  return (
    <div>
      <AnimatePresence mode="wait">
      <Router>
          <Routes>
            <Route path="/" element={
              <GetStarted/>
            } />
            <Route path="/home" element={
              <Home/>
            } />
            <Route path="/bookfinder" element={<BookFind/>} />
            <Route path="/signIn" element={isAuthentic ? <Navigate to='/home'/> : <SignIn/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/adminSignUp" element={<AdminSignUp/>} />
            <Route path="/admin/registration" element={<Registration/>} />
            <Route path="/writeus" element={<Writeus/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/allSubjects" element={<AllSubjects/>} />
            <Route path="/webDCourse" element={<WebDCourse/>} />
            <Route path="/reactCourse" element={<ReactJsCourse/>} />
            <Route path="/machineLearning" element={<MachineLearning/>} />
            <Route path="/successPayment" element={<SuccessPayment/>} />
            <Route path="/cancelPayment" element={<CancelPayment/>} />
            <Route path="/home/startlearningDBMS" element={<StartLearning/>} />
            <Route path="/home/startlearningOS" element={<StartLearningOS/>} />
            <Route path="/home/startlearningJAVA" element={<StartLearningJAVA/>} />
            <Route path="/home/startlearningCN" element={<StartLearningCN/>} />
          </Routes>
          </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
export { ThemeContext };
