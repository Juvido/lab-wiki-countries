import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CountriesList } from "../src/components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
      <CountriesList />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
