import { useSelector } from "react-redux";
import FormationItem from "./FormationItem";
import "./Styles2.css";

function LatestFormations() {
  const formations = useSelector((state) => state.formation.Formations || []);

  const latestFormations = [...formations]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, 3);

  return (
    <div className="latest-formation-container">
      <h2 style={{ textAlign: "center", margin: "20px 0" ,textAlign:"left",marginLeft:"60px",
        marginBottom: "20px",
        borderBottom: "3px solid #15BE6A", 
        paddingBottom: "5px" ,
        width:"150px"
      }}>
        New Courses</h2>
      <div className="formation-grid">
        {latestFormations.map((f) => (
          <FormationItem
            key={f.id}
            id={f.id}
            image={f.image}
            name={f.name}
            domain={f.domain}
            price={f.price}
            rating={f.rating}
            center={f.center}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestFormations;
