import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './componants/Header';
import Home from './componants/Home';
import Contact from './componants/Contact';
import Login from './componants/Login';
import Register from './componants/Register';
import Register2 from './componants/Register2';
import EmailVerfier from './componants/EmailVerfier'
import CodeVerfier from './componants/CodeVerfier';
import NewPassword from './componants/NewPassword';
import FormationList from './componants/FormationList';
import FormationDetails from './componants/FormationDetails';
import LatestFormations from './componants/LatestFormations';
import About from './componants/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/registrer' element={<Register/>}/>
        <Route path='/registrer2' element={<Register2/>}/>
        <Route path='/EmailVerfier' element={<EmailVerfier/>}/>
        <Route path='/FormationList' element={<FormationList/>}/>
        <Route path='/FormationList/:id' element={<FormationDetails/>}/>
        <Route path='/CodeVerfier' element={<CodeVerfier/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/NewPassword' element={<NewPassword/>}/>
      </Routes >
    </div>
  );
}

export default App;
