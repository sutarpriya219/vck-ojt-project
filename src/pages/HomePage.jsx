import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../style/Pages.css"
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
                <div className="main-layout">
                    <div className="demo4">
                        <center><img src="https://vivekanandcollege.ac.in/images/header-new.png" className="img"/></center>
                        <div className="demo5">
                            <h1>Welcome to Vivekanand <br/>College! </h1>
                            <p id="p1">Your Journey to excellence starts here</p>
                            <Link to="/admissions"><button id="c1">Apply Now!</button></Link>
                        </div>
                    </div>
                       
                        
                    <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            

                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li><strong>**Legacy of Excellence:</strong>** Decades of commitment to quality education.</li>
                        <li><strong>**Experienced Faculty:</strong>** Learn from renowned experts and passionate educators.</li>
                        <li><strong>**Modern Facilities:</strong>** Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><strong>**Holistic Development:</strong>** Focus on co-curricular activities, sports, and community service.</li>
                        <li><strong>**Strong Placements:</strong>** Excellent career opportunities with leading companies.</li>
                    </ul>
            
                    <h2>Campus Life & Facilities</h2>
                    <div id="img1">
                        <img src="https://vivekanandcollege.ac.in/uploads/home/WhatsApp%20Image%202025-05-15%20at%2010.31.26%20AM.jpeg" className="img2"/>           
                        <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" className="img3"/>
                    </div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                    <center><p id="p2">Ready to explore our courses?</p></center>
                    <center><Link to="/courses"><button id="a1">Explore Courses</button></Link></center>

                
                
                
             </div>
        </div>
    </div>

    )
}
export default HomePage;

