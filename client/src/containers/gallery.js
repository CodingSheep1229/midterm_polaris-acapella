import React, { Component } from 'react';
import './containers.css';
import group from '../pic/group.jpeg';

class Gallery extends Component {
    render() {
        return(
<>
        <div id='gallery' className='panel'>
            <div className='panelTitle'>GALLERY</div>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class=""></li>
        <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item">
          <img class="slide" src={group} alt="First slide" />
        </div>
        <div class="carousel-item active">
          <img class="slide" src={group} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="slide" src={group} alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
        </div>
        
</>
        );
    }
}

export default Gallery;