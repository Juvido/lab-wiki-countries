import { useParams } from "react-router-dom";
import countries from "../../assets/data/countries";
import { Link } from "react-router-dom";

export function CountryDetails() {
  const { alpha3Code } = useParams();

  const country = countries.filter(
    (currentCountry) => currentCountry.alpha3Code === alpha3Code
  )[0];
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Official name</td>
            <td>{country.name.official}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            {country.capital.map((currentCapital) => {
              return <td>{currentCapital}</td>;
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((currentBorder) => (
                  <Link to={`/${currentBorder}`}>
                    <li > {currentBorder}</li>
                  </Link>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
