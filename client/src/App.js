import React from 'react';
import Header from './components/header';
import Home from './containers/home';
import About from './containers/about';
import Members from './containers/members';
import Shows from './containers/shows';
import Gallery from './containers/gallery';
import Contact from './containers/contact';
import './App.css';


function App() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Members />
            <Shows />
            <Gallery />
            <Contact />
        </div>
    );
}

export default App;
