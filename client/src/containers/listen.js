import React, { Component } from 'react';
import './containers.css';
import ReactPlayer from 'react-player';

class Listen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("/api/getVideos")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data }));
    };
    render() {
        return(
        <div id='listen' className='panel'>
            <div className='panelTitle'>LISTEN TO OUR MUSIC</div>
            <div></div>
            {this.state.data.map((e,idx) => 
            <div className='vid' key={idx}><ReactPlayer url={e.url} playing={false} width='100%' height='100%'/></div>)}
        </div>
        );
    }
}

export default Listen;