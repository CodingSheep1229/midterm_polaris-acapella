import React, { Component } from 'react';
import './containers.css';
import group from '../pic/group.jpeg';

class Gallery extends Component {
    render() {
        return(
<>
        <div id='gallery' className='panel'>
            <div className='panelTitle'>SIFT THROUGH OUR GALLERY</div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item">
          <img className="slide" src={group} alt="First slide" />
        </div>
        <div className="carousel-item active">
          <img className="slide" src={group} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="slide" src={group} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
        </div>
        
</>
        );
    }
}

export default Gallery;