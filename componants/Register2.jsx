import "./Styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegister } from "../Redux/ActionTypes";
function Register2(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName,setUserName] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [choose,setChoose] = useState("");

    function OnchangeUserName(e){
        setUserName(e.target.value)
    }
    function OnchangeFirstName(e){
        setFirstName(e.target.value)
    }
    function OnchangeLastName(e){
        setLastName(e.target.value)
    }
    function OnchangeChoose(e){
        setChoose(e.target.value)
    }

    function registrer(){ 
        dispatch(setRegister({userName,firstName,lastName,choose}))
        navigate("/registrer")
    }
    function navLogin(){
        navigate("/Login")
    }

    return(
        <div style={{display:"flex",gap:"100px"}}>
            <div>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="imgRegister"/>
                <h1 className="titre21">FormInova</h1>
            </div>
                <hr className="hrRegister1"/>
                <h1 className="h1Register">Register</h1>
                <input type="text" placeholder="User name" className="inputRegister" value={userName} onChange={OnchangeUserName}/>
                <br /><br />
                <input type="text" placeholder="First name" className="inputRegister" value={firstName} onChange={OnchangeFirstName}/>
                <br /><br />
                <input type="text" placeholder="Last name" className="inputRegister" value={lastName} onChange={OnchangeLastName}/>
                <br /><br />
                <select className="selectRegister2" value={choose} onChange={OnchangeChoose}>
                    <option value="all">Choose a field of study</option>
                    <option value="cyber_securtite">Cyber Securtite</option>
                </select>
                <br /><br />
                <button className="btnR2" onClick={registrer}>Register</button>
                <div className="orLineR">
                <hr />
                    <p>or continue with</p>
                <hr />
                </div>
                <div className="socialIconsRegister">
                    <a href="#"><i class="fa-brands fa-google"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    
                </div>
            </div>
            <div className="divRegister">
                <h1 className="hRegister">Welcome back!</h1>
                <h3 className="pRegister">Already have an account??</h3>
                <button className="btnR1" onClick={navLogin}>Login</button>
            </div>
        </div>
    )
}
export default Register2;