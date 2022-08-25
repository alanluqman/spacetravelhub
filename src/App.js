import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navigation from './component/Header';
import Missions from './pages/Missions';
import store from './redux/configureStore';
import Rockets from './pages/Rockets';
import Display from './pages/MyProfile';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route index element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myprofile" element={<Display />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
