import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Pages

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Gallery from './pages/Gallery';
import Itens from './pages/Itens';
import Movimentos from './pages/Movimentos';
import Header from './components/Header';
import Footer from './components/Footer';

var menuList = [
    {name: 'Home', link: '/', photo: 'https://cdn-icons-png.flaticon.com/128/1752/1752817.png'},
    {name: 'Galeria', link: '/gallery', photo: 'https://cdn-icons-png.flaticon.com/128/3342/3342137.png'},
    {name: 'Pokedex', link: '/pokedex', photo: 'https://cdn-icons-png.flaticon.com/128/1752/1752732.png'},
    {name: 'Itens', link: '/itens', photo: 'https://cdn-icons-png.flaticon.com/128/287/287273.png'},
    {name: 'Movimentos', link: '/movimentos', photo: 'https://cdn-icons-png.flaticon.com/512/1819/1819372.png'}
]

function App() {
    return (
        <Router>
            <Header menuList={menuList} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/itens' element={<Itens />} />
                <Route path='/movimentos' element={<Movimentos />} />
            </Routes>
        </Router>
    );
}

export default App;