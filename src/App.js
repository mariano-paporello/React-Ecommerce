import ItemListContainer from './components/main/ItemListContainer';
import FooterBar from './components/FooterBar';
import './main.css';
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './components/contexts/CartContext';

function App() {
  return (
    <div className='bodyStyle'>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' 
        element={
          <div style={{color: "red", fontWeight:"bold", display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"blue"}}> ERROR 404</div>
        } />
      </Routes>
      <FooterBar/>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;




