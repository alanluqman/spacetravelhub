import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Header';
import Rockets from './pages/Rockets';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
