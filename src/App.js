import react from 'react'
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/CartPage';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Route path='/' component={Home} exact/>
        <Route path='/cartpage' component={CartPage}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
