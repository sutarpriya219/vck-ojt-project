import Header from "../components/Header/Header";

const ContactPage = () => { 
    return(
        <div>
            <Header/>
            <h1 style={{color:'blue'}}><center>Contact Us!</center></h1>
            <p>We'd love to hear from you! whether you have questions about admisions,programs, or campus life,our team is here to help</p>
            <h2>General Enquiries</h2><hr></hr>
            <h5>Vivekanand College Main Campus</h5>
            <p>[your College Full Address here.eg.,</p>
            <p>Mahatma Gandhi Road,Chembur,Mumbai,</p>
            <p>Maharashtra 400071]</p>
            <p>India</p>
            <p>Phone:**911234567890</p>
            <p>Email:**info@vivekanandcollege.edu**</p>
            <p>Office Hours:Monday-Friday,9:00AM-5:00PM IST</p>

            <h2>Admissions Office</h2><hr></hr>
            <p>For all admission-related quaries regarding undergraduate or postgradute programs:</p>
            <p>Phone:+919876543210</p>
            <p>Email:admission@vivekanandcollege.edu</p>

            <h2>Student Support Services</h2><hr></hr>
            <p>For current student support,academic,advising,or general assistance:</p>
            <p>Phone:+918765432109</p>
            <p>Email:studentsupport@vivekanandcollege.edu</p>

            <h2>Find Us on the Map</h2><hr></hr>
            <p>[you cam embed a Google Map here later using an iframe or React map library]</p>
            <a href="https://www.google.com/maps/search/Vivekanand+College/@16.695294,74.235904,14z?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D">View on Google Map</a>

            <h2>Send Us a Message</h2><hr></hr>
            <p>[A contact  form with fields for Name, Email, Subject, Message can be added here.]</p>



        </div>
    )
}
export default ContactPage;
