import React, { Component } from 'react';
import './containers.css';



class About extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getAbout")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data[0] }));
    };
    render() {
        // console.log(this.state);
        return(
            <div id='about' className='panel'>
                <div className='panelTitle'>ABOUT</div>
                <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
            </div>
        );
    }
}

export default About;