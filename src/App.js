import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Shop from './components/Shops/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Inventory from './components/Inventory/Inventory';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
        <Route exact path="/" element={<Shop/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/review" element={<Review/>}/>
        <Route exact path="/inventory" element={<Inventory/>}/>
        <Route exact path="/product/:productkey" element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
