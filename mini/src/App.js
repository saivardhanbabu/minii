import logo from './logo.svg';
import './App.css';
import P1details from './components/P1details'
import P2details from './components/P2details';
import P3details from './components/P3details';
import P4details from './components/P4details';
import P5details from './components/P5details';
import P6details from './components/P6details';
import Product from './Product'
import { createBrowserRouter,RouterProvider,Routes,Route,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="P1details" element={<P1details/>}/>
    <Route path="P2details" element={<P2details/>}/>
    <Route path="P3details" element={<P3details/>}/>
    <Route path="P4details" element={<P4details/>}/>
    <Route path="P5details" element={<P5details/>}/>
    <Route path="P6details" element={<P6details/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
