import Header from "./Header";
import Contact from "./Contact";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import LatestFormations from "./LatestFormations";
function Home(){
    const navigate = useNavigate();
    function navCours(){
        navigate("/FormationList")
    }
    return(
        <div id="hero">
        <Header/>
        <br /><br /><br />
        <div className="text-container" >
            <h1 className="title">Learning is no longer limited by place… learn anytime, anywhere</h1>
            <button className="cta-button">Start Learning</button>
            <button className="cta-button2" onClick={navCours}>View All Courses</button>
        </div>

        <div>

        <div className="blob-container">
            <img src={process.env.PUBLIC_URL + "/photo1.png"} alt="" className="imgBody"/>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(74, 226, 158, 0.86)" d="M13.1,-27.2C18.5,-19.5,25.5,-19.2,37.6,-15.8C49.7,-12.5,66.8,-6.3,69.8,1.7C72.7,9.6,61.4,19.3,48.5,21.2C35.6,23,21,17.1,12.7,15.4C4.3,13.7,2.2,16.1,-0.9,17.7C-4,19.3,-8,20,-8.7,17.4C-9.5,14.7,-6.9,8.6,-19.1,5.2C-31.3,1.7,-58.1,0.8,-59.4,-0.7C-60.7,-2.3,-36.4,-4.6,-26.1,-11.5C-15.9,-18.3,-19.8,-29.6,-17.7,-39.2C-15.7,-48.8,-7.9,-56.7,-2,-53.2C3.8,-49.7,7.7,-34.8,13.1,-27.2Z" transform="translate(100 100)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#15BE6A" fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,202.7C560,192,640,96,720,69.3C800,43,880,85,960,85.3C1040,85,1120,43,1200,21.3C1280,0,1360,0,1400,0L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        
        </div>
        <div id="latest">
            <LatestFormations/>
        </div>
        <br /><br /><br />
        <div id="contact">
            <Contact/>
        </div>
        </div>
    )
}
export default Home;