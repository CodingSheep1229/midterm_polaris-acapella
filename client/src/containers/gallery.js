import React, { Component } from 'react';
import './containers.css';
import group from '../pic/group.jpeg';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("/api/getPhotos")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data }));
    };
    render() {
        return(
    <>
        <div id='gallery' className='panel'>
            <div className='panelTitle'>SIFT THROUGH OUR GALLERY</div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    {this.state.data.map((e,idx) => 
                        <li data-target="#myCarousel" data-slide-to={idx+1} key={idx} className=""></li>
                    )}
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="slide" src={group} alt="pic" />
                    </div>
                    {this.state.data.map((e,idx) => 
                        <div className="carousel-item" key={idx}>
                            <img className="slide" src={e.url} alt="pic" />
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