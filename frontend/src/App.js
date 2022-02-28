import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';

import Register from './Screens/Register';
import Homescreen from './Screens/Homescreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen />} exact />
        <Route path='/Signup' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;