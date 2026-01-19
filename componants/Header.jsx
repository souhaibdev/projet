import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setDomainFiltrer } from "../Redux/ActionTypes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogin } from "../Redux/ActionTypes";
import { setLogout } from "../Redux/ActionTypes";
function Header(){
    const navigate = useNavigate();

    const navLogin = () => {
    if (isAuthenticated) {
        dispatch(setLogout()); 
        navigate("/")
    } else {
        dispatch(setLogin());
        navigate("/Login")
    }
    };

    const dispatch = useDispatch();
    const [recherche,setRecherche] = useState("");

    function OnchangeRecherche(e){
        const value = e.target.value;
        setRecherche(value);
        dispatch(setDomainFiltrer(value));
    }

    function navCours(){
        navigate("/FormationList")
    }
    function navAbout(){
        navigate("/About")
    }
    function navHome(){
        navigate("/")
    }

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function navRegister(){
        navigate("/registrer")
    }
    
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return(
        <div className="header">
            <div className="logo">
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="img"/>
            <h2 className="titre">FormInova</h2>
            </div>
            <input type="text" placeholder="Search Courses..." className="search" value={recherche} onChange={OnchangeRecherche}/>
            <ul className="nav-links">
                <li onClick={navHome}>Home</li>
                <li onClick={navAbout}>About'us</li>
                <li onClick={navCours}>Courses</li>
                <li onClick={() => scrollToSection("latest")}>New Courses</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
            <div className="auth-buttons">
            <button className="signup" onClick={navRegister}>Sign Up</button>
            <button className="login" onClick={navLogin} >{isAuthenticated ? "Logout" : "Login"}</button>
        </div>
        </div>
    )
}
export default Header;