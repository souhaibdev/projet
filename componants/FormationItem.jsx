import "./Styles2.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function FormationItem(props){
    const navigate = useNavigate();
    function navDetail(){
        navigate(`/FormationList/${props.id}`)
    }
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    function handleToQuiz() {
    if (isAuthenticated) {
      navigate(`/FormationList/${props.id}`);
    } else {
      alert("You must be logged in to add courses to your cart!");
    }
  }
    return(
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} className="imgItem" />
                <p className="overlay">{props.center}</p>
            </div>
            <h1>{props.name}</h1>
            <p className="domain">{props.domain}</p>
            <p className="price">{props.price} Dhs</p>
            <p className="rating"> ★{props.rating}</p>
            <button className="button-detail" onClick={navDetail}>See Details</button>
            <button className="button-add" onClick={handleToQuiz}><i class="fa-solid fa-cart-arrow-down"></i></button>
        </div>
    )
}
export default FormationItem;