import logo from './logo.svg';
import './App.css';
// import your arrays here
import { cities } from './cities-data';
import CitiesList from './CitiesList';
import { states } from './states-data';
import StatesList from './StatesList';
import { countries } from './countries-data';
import CountriesList from './CountriesList';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
      <StatesList states={states} />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
