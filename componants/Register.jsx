import "./Styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegister } from "../Redux/ActionTypes";
function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email,setEmail] = useState("")
    const [nameCard,setNameCard] = useState("")
    const [cardNumber,setCardNumber] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("");

    function OnchangeEmail(e){
        setEmail(e.target.value)
    }
    function OnchangeNameCard(e){
        setNameCard(e.target.value)
    }
    function OnchangeCardNumber(e){
        setCardNumber(e.target.value)
    }
    function OnchangeConfirmPassword(e){
        const value = e.target.value;
        setConfirmPassword(value);

        if(password !== value){
            setPasswordError("Les mots de passe ne correspondent pas");
        } else {
            setPasswordError(""); 
    }
    }
    function OnchangePassword(e){
        setPassword(e.target.value)
    }

    function registrer(){ 
        dispatch(setRegister({email,nameCard,cardNumber,password}))
        navigate("/Login")
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
                <input type="text" placeholder="Email" className="inputRegister" value={email} onChange={OnchangeEmail}/>
                <br /><br />
                <div className="cardRow" value={nameCard} onChange={OnchangeNameCard}>
                <select className="selectRegister">
                    <option value="all">Name on card</option>
                    <option value="visa">Visa</option>
                </select>
                <br /><br />
                <input type="text" placeholder="Card number" className="inputRegister1" value={cardNumber} onChange={OnchangeCardNumber}/></div>
                <br />
                <input type="password" placeholder="Password" className="inputRegister" value={password} onChange={OnchangePassword}/>
                <br /><br />
                <input type="password" placeholder="Confirm Password" className="inputRegister" value={confirmPassword} onChange={OnchangeConfirmPassword}/>
                <p style={{color:"red",textAlign:"center"}}>{passwordError}</p>
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
export default Register;