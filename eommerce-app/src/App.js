import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import {BrouserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage></HomePage>
      </Router>
    </div>
  );
}

export default App;
