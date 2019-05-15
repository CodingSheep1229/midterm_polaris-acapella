import React, { Component } from 'react';
import './containers.css';
import group from '../pic/group.jpeg';

// var pics = [
//     {url:'https://live.staticflickr.com/7811/47393421201_ce1862c7a2_k.jpg'},
//     {url:'https://live.staticflickr.com/7842/39995725243_188a640927_k.jpg'},
//     {url:'https://live.staticflickr.com/4850/46432003691_3865f0f1d6_k.jpg'},
//     {url:'https://live.staticflickr.com/4805/45519521615_bc92634711_k.jpg'},
//     {url:'https://live.staticflickr.com/4914/46432082631_e388c53710_k.jpg'}
// ];
// // var pics = [];


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getPhotos")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data }));
    };
    render() {
        console.log(this.state);
        return(
    <>
        <div id='gallery' className='panel'>
            <div className='panelTitle'>SIFT THROUGH OUR GALLERY</div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    {this.state.data.map((e,idx) => 
                        <li data-target="#myCarousel" data-slide-to={idx+1} className=""></li>
                    )}
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="slide" src={group} alt="photo" />
                    </div>
                    {this.state.data.map((e,idx) => 
                        <div className="carousel-item">
                            <img className="slide" src={e.url} key={idx} alt="photo" />
                        </div>  
                    )}
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