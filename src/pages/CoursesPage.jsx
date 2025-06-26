import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Link } from "react-router-dom";

const CoursesPage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
              <div className="main-layout">
                    <h1 className="heading"><center>Our Academic Programs</center></h1>
                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements</p>
                    <h2>Discover campus Life</h2>
                    <div className="v1" >
                      <video id="video" controls>
                        <source src="/videos/vck.mp4"/>
                      </video>
                      <p className="vck"><i>Get a glimpse of the vibrant academic and social Life at Vivekanand College</i></p>
                      
                    </div>
                      
                    <h2>Undergraduate Programs(UG)</h2>
                    <ul>
                    <li><strong>*Bachelor of Science (B.Sc.)*</strong></li>
                    <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                    </ul>

                    <li><strong>*Bachelor of Commerce (B.Com)*</strong></li>
                    <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                    </ul>

                    <li><strong>*Bachelor of Arts (B.A.)*</strong></li>
                    <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                    </ul>
                    </ul>
      
                    <h2>Postgraduate Programs(PG)</h2>
                    <ul>
                    <li><strong>*Master of Science (M.Sc.)*</strong></li>
                    <ul>
                    <li>Computer Science (2 years)</li>
                    <li>Information Technology (2 years)</li>
                    </ul>
                    <li><strong>*Master of Commerce (M.Com)* (2 years)</strong></li>
                    <li><strong>*Master of Arts (M.A.)* (2 years)</strong></li>
      
                    <h2>Program Details & Fee Structure</h2>
                    <table>
                    <tr>
                    <th>Program Type</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Annual Fee (INR)</th>
                    <th>Eligibility</th>
                    </tr>
                    <tr>
                    <td>UG</td>
                    <td>B.Sc. Computer Science</td>
                    <td>3 Years</td>
                    <td>₹ 85,000</td>
                    <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                    <td>UG</td>
                    <td>B.Com. Accounting & Finance</td>
                    <td>3 Years</td>
                    <td>₹ 70,000</td>
                    <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                    <td>PG</td>
                    <td>M.Sc. Information Technology</td>
                    <td>2 Years</td>
                    <td>₹ 95,000</td>
                    <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                     </table>

                    </ul>
                    <h2>Specialized & Vocational Courses</h2>
                    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                    <center><p>Have quetions about a specific course?.</p></center>
                    <center><Link to="/contact"><button id="a1">Inquire About Courses</button></Link></center>
              </div>
              
            </div>
    
     
            
        </div>
    )
}
export default CoursesPage;
