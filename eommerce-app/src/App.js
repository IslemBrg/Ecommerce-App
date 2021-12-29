import './CSS/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Member from './Pages/Member';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/:id' element={<Member/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
