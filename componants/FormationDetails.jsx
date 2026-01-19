import "./Styles2.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FormationDetails() {
  const { Formations } = useSelector(state => state.formation);
  const { id } = useParams();

  const exist = Formations.find(pro => pro.id === Number(id));

  if (!exist) {
    return (
      <div>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Course not found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
    <br /><br /><br /><br />
      <div className="details-card">
        <div className="details-img-container">
          {/* <img src={exist.image} alt={exist.name} className="details-img" /> */}
          <video src={exist.vidio} className="details-img" controls></video>
          <p className="overlay-center">{exist.center}</p>
        </div>

        <div className="details-content">
          <h1>{exist.name}</h1>
          <p className="domain">{exist.domain}</p>
          <p className="description">{exist.description}</p>
          <p className="price">Price: {exist.price} Dhs</p>
          <p className="rating">Rating: ★{exist.rating}</p>
          <p className="publishedDate">Published: {exist.publishedDate}</p>
          <p className="duration">Duration: {exist.duration}</p>
          <p className="center">Center: {exist.center}</p>

          <div className="buttons">
            <button className="btn-enroll">Enroll Now</button>
            <button className="btn-cart"><i className="fa-solid fa-cart-arrow-down"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormationDetails;
