import React, { Component } from 'react';
import './containers.css';
import meteor from '../pic/shooting-star.svg';


class Home extends Component {
    shootingStar(dir) {
        setInterval(function(){
          var yAxis = Math.floor(Math.random() * 40) + 1;
          yAxis = yAxis + 'vh';
          var xAxis = Math.floor(Math.random() * 40) + 1;
          xAxis = xAxis + 'vw';
          var trans = Math.floor(Math.random() * 50) + 1;
          trans = trans + 'deg';
          var ctx = document.getElementById('shooting-star');
          ctx.setAttribute('style','top:' + yAxis + ';' + dir + ':' + xAxis + '; transform:' + 'rotate(' + trans + ')');
        }, 1000);
    }
    componentDidMount() {
        this.shootingStar('left');
    }
    render() {
        return(
        <div id='home' className='panel'>
            <div id='title'></div>
            <figure className="shooting-star" id="shooting-star">
                <img src={meteor} alt="shooting star"/>
            </figure>
        </div>
        );
    }
}

export default Home;