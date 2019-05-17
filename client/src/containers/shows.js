import React, { Component } from 'react';
import './containers.css';

class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("/api/getShows")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data }));
    };
    render() {
        return(
        <div id='shows' className='panel'>
            <div className='panelTitle'>COME TO OUR SHOWS</div>
            <br/>
            <table>
                <tr><td>Name</td><td>Time</td><td>Place</td></tr>
                {this.state.data.map((e,idx)=><tr key={idx}><td>{e.name}</td><td>{e.time}</td><td>{e.place}</td></tr>)}


            </table>
        </div>
        );
    }
}

export default Shows;