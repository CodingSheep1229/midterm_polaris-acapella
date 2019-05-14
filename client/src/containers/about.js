import React, { Component } from 'react';
import './containers.css';

class About extends Component {
    render() {
        // console.log(this.state);
        return(
            <div id='about' className='panel'>
                <div className='panelTitle'>READ ABOUT US</div>
                <p>無數爆炸 巨焰 塵埃 冰冷之中</p><p>我們是明晰的永恆</p><p>高掛</p><br /><p>大海與時間的巨浪之上</p><p>我們閃耀 指引</p><p>你總能在小熊的尾尖上找到我們</p><p>我們有花俏的名字</p><p>但</p><p>姑且叫我們Polaris</p><br/><p>宇宙亙古樂音</p><p>我們高唱</p>
            </div>
        );
    }
}

export default About;