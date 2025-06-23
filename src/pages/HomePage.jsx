import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../style/Pages.css"

const HomePage = () => {
    return(
        <div>
            <Header/>
            <div className="main1">
                <div className="main2">
            
                    <img src="https://vivekanandcollege.ac.in/images/header-new.png" className="img"/>
                    <section className="demo">
                        <h1 style={{fontSize:'60px'}} className="">Welcome to Vivekanand <br/>College! </h1>
                        <p>Your Journey to excellence starts here</p>
                        <Link to="/admission" className="b1"><button>Apply Now!</button></Link>
                    </section>    
                        
                    <p>**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            

                    <h1>Why Choose Vivekanand College?</h1>
                    <ul>
                        <li><strong>**Legacy of Excellence:</strong>** Decades of commitment to quality education.</li>
                        <li><strong>**Experienced Faculty:</strong>** Learn from renowned experts and passionate educators.</li>
                        <li><strong>**Modern Facilities:</strong>** Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><strong>**Holistic Development:</strong>** Focus on co-curricular activities, sports, and community service.</li>
                        <li><strong>**Strong Placements:</strong>** Excellent career opportunities with leading companies.</li>
                    </ul>
            
                    <h1>Campus Life & Facilities</h1>
                    <div id="img1">
                    <img src="https://vivekanandcollege.ac.in/uploads/home/WhatsApp%20Image%202025-05-15%20at%2010.31.26%20AM.jpeg" className="im1"/>           
                    <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" className="im2"/>
                    </div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

                    <center><p>Ready to explore our courses?</p></center>
                    <center><Link to="/course"><button id="id4">Explore Courses</button></Link></center>

                </div>
             </div>
        </div>

    )
}
export default HomePage;

