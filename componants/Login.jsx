import "./Styles.css";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../Redux/ActionTypes";
function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state=>state.auth.users || [])
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function OnchangEmail(e){
        setEmail(e.target.value)
    }
    function OnchangePassword(e){
        setPassword(e.target.value)
    } 

    function LoginNAv(){
        const fetcher = users.find((user)=> (
            user.email === email && user.password === password
        ))
        if(fetcher){
            dispatch(setLogin(fetcher))
            navigate("/")
        }
        else{
            alert("user name or password error")
        }
        
    }

    function navi(){
        navigate("/registrer2")
    }

    function NavEmail(){
        navigate("/EmailVerfier")
    }
    return(
        <div style={{display:"flex",gap:"100px"}}>
            <div className="divLogin">
                <h1 className="hLogin">Hello,Welcome</h1>
                <h3 className="pLogin">Don’t have an account?</h3>
                <button className="btn1" onClick={navi}>Register</button>
            </div>
            <div>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="imgLogin"/>
                <h1 className="titre21">FormInova</h1>
            </div>
                <hr className="hrLogin1"/>
                <h1 className="h1Login">Login</h1>
                <input type="email" placeholder="Email" className="inputLogin" value={email} onChange={OnchangEmail}/>
                <br /><br />
                <input type="password" placeholder="Password" className="inputLogin" value={password} onChange={OnchangePassword}/>
                <br />
                <button className="aLogin" onClick={NavEmail}>Forgot password?</button>
                <br /><br />
                <button className="btn2" onClick={LoginNAv}>Login</button>
                <div className="orLine">
                <hr />
                    <p>or continue with</p>
                <hr />
                </div>
                <div className="socialIconsLogin">
                    <a href="#"><i class="fa-brands fa-google"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    
                </div>
            </div>
        </div>
    )
}
export default Login;