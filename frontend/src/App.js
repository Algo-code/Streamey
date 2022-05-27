import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';

import Register from './Screens/Register';
import Homescreen from './Screens/Homescreen';
import ChatPanel from './Components/ChatPanel';
import ChooseChat from './Components/ChooseChat';

import Profile from './Screens/Profile';
function App() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path='/home' element={<Homescreen />}>
            <Route path='/home/chat/:id' element={<ChatPanel />} />
            <Route path='/home' element={<ChooseChat />} />
          </Route>

          <Route path='/Signup' element={<Register />} />
          <Route path='/' element={<Login />} exact />
          <Route path='/me' element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
