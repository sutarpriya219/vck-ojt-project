import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import './style/Pages.css';
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            //<Route path="/home" element= {<HomePage/>}/>
            <Route path="/about" element= {<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/admissions" element={<AdmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
        <Footer/>
      </Router>
    </div>
  )
}
export default App;
