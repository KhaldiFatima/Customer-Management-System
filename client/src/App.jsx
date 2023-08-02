import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import Customers from './Pages/Customers';
import Update from './Pages/Update';

function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Customers />} />
            <Route path='/add' element={<Add />} />
            <Route path='/update/:id' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
