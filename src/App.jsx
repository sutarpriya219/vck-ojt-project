import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import './style/Pages.css';
import AdmissionPage from "./pages/AdmissionPage";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            //<Route path="/home" element= {<HomePage/>}/>
            <Route path="/about" element= {<AboutPage/>}/>
            <Route path="/course" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
