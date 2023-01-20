import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';
import AddEditVinyl from './pages/AddEditVinyl';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';



function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddEditVinyl />}/>
          <Route path='/update/:id' element={<AddEditVinyl />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
