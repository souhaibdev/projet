import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setResetEmail, setStep } from "../Redux/ActionTypes";

function EmailVerfier() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  function handleNext() {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    dispatch(setResetEmail(email));
    dispatch(setStep(2));
    navigate("/CodeVerfier"); 
  }

  function handleBack() {
    navigate("/Login");
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

        <div style={{ marginTop: "120px" }}>
          <h1 className="h1Login">Reset Password</h1>

          <input
            type="email"
            placeholder="Email"
            className="inputLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <button className="btn2" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default EmailVerfier;
