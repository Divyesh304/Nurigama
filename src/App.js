import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Contact from './Componenets/Contact';
import Menu from './Componenets/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Componenets/Error';
import Products from './Componenets/Products';
import Single from './Componenets/Single';
import Cart from './Componenets/Cart';
import Search from './Componenets/Search';

function App() {

  return (
    <div className="App">
      <Menu/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/single/:id' element={<Single/>}/>
          <Route path='/cart' element={<Cart/>}/>
           <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
