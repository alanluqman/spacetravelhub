import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
