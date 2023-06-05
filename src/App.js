
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import Home from './views/Home';
import Contact from './views/Contact';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
      {/* <MyFooter /> */}
      
    </div>
  );
}

export default App;
