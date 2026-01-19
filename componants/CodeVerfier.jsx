import "./Styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCode, setStep } from "../Redux/ActionTypes";

function CodeVerfier() {
  const [code, setCodeValue] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCodeValue(newCode);
  }

  function handleNext() {
    const finalCode = code.join("");

    if (finalCode.length < 6) {
      alert("Please enter the full code");
      return;
    }

    dispatch(setCode(finalCode));
    dispatch(setStep(3));
    navigate("/NewPassword");
  }

  function handleBack() {
    navigate("/EmailVerfier");
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

          <div>
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                placeholder="0"
                className="inputVerfier"
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          <br /><br />

          <button className="btn2" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default CodeVerfier;
