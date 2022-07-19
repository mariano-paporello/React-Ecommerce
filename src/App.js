import ItemListContainer from './components/main/itemListContainer';
import FooterBar from './components/footerBar';
import './main.css';
import NavBar from "./components/navBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/main/ItemDetailContainer';

function App() {
  return (
    <div className='bodyStyle'>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' 
        element={
          <div style={{color: "red", fontWeight:"bold", display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"blue"}}> ERROR 404</div>
        } />
      </Routes>
      <FooterBar/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;




