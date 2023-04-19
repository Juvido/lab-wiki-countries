import { Link } from "react-router-dom";
import countries from "../../assets/data/countries";

export function CountriesList() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
          <div className="list-group">
            {countries.map((currentCountry) => {
              return (
                <Link to={`/${currentCountry.alpha3Code}`}>
                  <p className="list-group-item list-group-item-action" >
                    {currentCountry.name.common}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
  const params = useParams()

  const country = countries.filter((currentCountry)=> {
    return currentCountry.alpha3code === params.alpha3code
  })[0];
  
*/
/*
  return (
    <>
      <Link to="/country/">
        <h2> {country.name.common} </h2>{" "}
      </Link>
      <p> Official name: {country.name.official} </p>{" "}
      <p> Capital: {country.capital} </p> <p> Area: {country.area} </p>{" "}
      
    </>
  );
}
*/
