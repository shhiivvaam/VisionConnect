import LobbyScreen from './screens/Lobby';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RoomPage from './screens/Room';

function App() {
  return (
    <div className="App bg-black text-white h-screen w-full flex justify-center items-center">
      <Routes>
        <Route path='/' element={<LobbyScreen />} />
        <Route path='/room/:roomId' element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
