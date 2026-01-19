import "./Styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthState, updatePassword } from "../Redux/ActionTypes";

function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const resetEmail = useSelector((state) => state.auth?.resetEmail);

  function OnchangeConfirmPassword(e){
        const value = e.target.value;
        setConfirmPassword(value);

        if(password !== value){
            setPasswordError("Les mots de passe ne correspondent pas");
        } else {
            setPasswordError(""); 
    }
    }
  function handleBack() {
    navigate("/code-verifier");
  }

  function handleSubmit() {
    if (!password || !confirmPassword) {
        alert("Please fill both fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }


  
    dispatch(updatePassword(resetEmail, password));


    dispatch(resetAuthState());

    alert("Password reset successful!");
    navigate("/login"); 
    }


  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <div className="divLogin">
        <h1 className="hLogin">Hello, Welcome</h1>
        <h3 className="pLogin">We forgot your password?</h3>
        <button className="btn1" onClick={handleBack}>Back</button>
      </div>

      <div>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className="imgLogin"
          />
          <h1 className="titre21">FormInova</h1>
        </div>

        <hr className="hrLogin1" />

        <div style={{ marginTop: "100px" }}>
          <h1 className="h1Login">New Password</h1>

          <input
            type="password"
            placeholder="Password"
            className="inputLogin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Confirm Password"
            className="inputLogin"
            value={confirmPassword}
            onChange={OnchangeConfirmPassword}
          />
          <p style={{color:"red",textAlign:"center"}}>{passwordError}</p>
          <br /><br />


          <button className="btn2" onClick={handleSubmit}>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
