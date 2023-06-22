import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Boxcolorchange from './pages/Boxcolorchange';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrolltoTop';

function App() {
  const user = false
  return (
<Router>
  <ScrollToTop>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:category" element={<ProductList/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={user?<Home/>:<Login/>} />
            <Route path="/register" element={user?<Home/>:<Register/>} />
        </Routes>
    </ScrollToTop>
</Router>
  ) ;
}

export default App;
