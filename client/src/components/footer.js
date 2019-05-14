import React, { Component } from 'react';
import './components.css';
import fb from '../pic/facebook.png';
import yt from '../pic/youtube.png';
import ig from '../pic/instagram.png';

class Footer extends Component {
    render() {
        return(
        <div id='footer' className='sticky'>
            <div className='footerdiv'>CONTACT US AT:</div>
            <div className='footerdiv'>
                <a href='https://www.facebook.com/polarisacappella/'><img src={fb} alt='facebook'/></a>
            </div>    
            <div className='footerdiv'>
                <a href='https://www.youtube.com/channel/UCwczkGvauHX9m1pk-_Wdh1Q'><img src={yt} alt='youtube'/></a>
            </div>
            <div className='footerdiv'>
                <a href='https://www.instagram.com/polarisacappella/'><img src={ig} alt='instagram'/></a>
            </div>
            <div className='footerdiv' id='info'>Made By: Sheeeeeeeep</div>
        </div>
        );
    }
}

export default Footer;