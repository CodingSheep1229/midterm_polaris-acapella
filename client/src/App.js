import React from 'react';
import Header from './components/header';
import Home from './containers/home';
import About from './containers/about';
import Members from './containers/members';
import Shows from './containers/shows';
import Gallery from './containers/gallery';
import Listen from './containers/listen';
import Footer from './components/footer';
import './App.css';


function App() {
    return (
        <div id='bod'>
            <Header />
            <Home />
            <About />
            <Members />
            <Shows />
            <Gallery />
            <Listen />
            <Footer />
        </div>
    );
}

export default App;
