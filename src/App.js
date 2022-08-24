import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Header';
import Missions from './pages/Missions';
import store from './redux/configureStore';
import Rockets from './pages/Rockets';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route />
            <Route path="/missions" element={<Missions />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </Provider>
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
