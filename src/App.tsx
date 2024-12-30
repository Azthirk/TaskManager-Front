import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>      
      </div>
    </BrowserRouter>
  );
}

export default App;
