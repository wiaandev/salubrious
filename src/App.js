
import {Routes, Route} from 'react-router-dom';
import Appointments from "./components/pages/Appointments";
import Patients from "./components/pages/Patients";
import Doctors from "./components/pages/Doctors";
import Register from "./components/pages/Register";
import Login from './components/pages/Login';
import Receptionists from './components/pages/Receptionists';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/Register' element = {<Register/>}></Route>
        <Route path='/Appointments' element = {<Appointments/>}></Route>
        <Route path='/Patients' element = {<Patients/>}></Route>
        <Route path='/Doctors' element = {<Doctors/>}></Route>
        <Route path='/Receptionists' element = {<Receptionists/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
