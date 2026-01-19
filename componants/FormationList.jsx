import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAffiche } from "../Redux/ActionTypes";
import Header from "./Header";
import FormationItem from "./FormationItem";
import { sortByRating } from "../Redux/ActionTypes";

function FormationList() {
  const dispatch = useDispatch();

  const filteredFormation = useSelector(
    (state) => state.formation?.filteredFormation || []
  );

  useEffect(() => {
    dispatch(setAffiche());
  }, [dispatch]);

  
  const handleSortChange = (e) => {
    dispatch(sortByRating(e.target.value)); 
  };

  return (
    <div>
       <Header />
       <br /><br /><br />
    <div className="formation-list-container">
     
      <div className="sort-container">
        <label htmlFor="sortRating">Sort by Rating: </label>
        <select id="sortRating" onChange={handleSortChange}>
          <option value="desc">Highest Rating</option>
          <option value="asc">Lowest Rating</option>
        </select>
      </div>
      <div className="formation-grid">
        {filteredFormation.map((f) => (
          <FormationItem key={f.id}
            id={f.id}
            image={f.image}
            name={f.name}
            domain={f.domain}
            price={f.price}
            rating={f.rating}
            center={f.center}
            vidio={f.vidio}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default FormationList;
