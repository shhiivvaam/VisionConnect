import LobbyScreen from './screens/Lobby';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-black text-white h-screen w-full flex justify-center items-center">
      <Routes>
        <Route path='/' element={<LobbyScreen />} />
      </Routes>
    </div>
  );
}

export default App;
