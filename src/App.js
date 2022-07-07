import ItemListContainer from './components/main/itemListContainer';
import FooterBar from './components/footerBar';
import './main.css';
import NavBar from "./components/navBar"

function App() {
  return (
    <div className='bodyStyle'>
    <NavBar />
    <ItemListContainer/>
    <FooterBar/>
    </div>
  );
}

export default App;




