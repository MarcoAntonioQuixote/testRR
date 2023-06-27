import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Family from './components/Family';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Dating from './components/Dating';
import { Routes, Route } from 'react-router-dom';

function App() {

  

  return (
    <div className="App-header">
        <Header/>

        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/family" element={<Family/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dating" element={<Dating/>}/>
            <Route path="/search" element={
                <Search/>}/>
                
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
