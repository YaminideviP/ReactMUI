import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/navbar/navbar'
import TemporaryDrawer from './components/sidebar/sidebar'
import Admission from './components/admission/admission';
import Profile from './components/profile/profile';
import Rules from './components/rules/rules';
import Reports from './components/reports/reports';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  sum(3,5)
  function sum(a,b){
    console.log(a,b)
  }
  return (
    <Router>
      <div className="App">
         <ButtonAppBar></ButtonAppBar>
      <Routes>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/rules" element={<Rules/>}></Route>
        <Route path="/admission" element={<Admission/>}></Route>
        <Route path="/reports" element={<Reports/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
