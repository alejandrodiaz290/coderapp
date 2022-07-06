import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//se importan los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarPrueba from './layouts/navbar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarPrueba /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;