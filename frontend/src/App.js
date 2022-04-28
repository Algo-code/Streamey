import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';

import Register from './Screens/Register';
import Homescreen from './Screens/Homescreen';
import ChatPanel from './Components/ChatPanel';
import ChooseChat from './Components/ChooseChat';
import axios from 'axios';
function App() {
  const api = 'http://localhost:5000/';
  return (
    <main style={{ minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Homescreen api={api} />} exact>
            <Route path='/chat/:id' element={<ChatPanel />} />
            <Route path='/' element={<ChooseChat />} />
          </Route>
          <Route path='/Signup' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
