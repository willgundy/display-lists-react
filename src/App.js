import logo from './logo.svg';
import './App.css';
// import your arrays here
import { cities } from './cities-data';
import CitiesList from './CitiesList';
import { states } from './states-data';
import StatesList from './StatesList';

function App() {
  return (
    <div className="App">
      <CitiesList cities={cities} />
      <StatesList states={states} />
    </div>
  );
}

export default App;
