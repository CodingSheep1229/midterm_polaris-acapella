import React, { Component } from 'react';
import './containers.css';
import group2 from '../pic/group2.jpeg';

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = { data: []};
        this.getDataFromDb();
    }
    getDataFromDb = () => {
        fetch("//0.0.0.0:3001/api/getMembers")
          .then(data => {return data.json()})
          .then(res => this.setState({ data: res.data }));
    };
    render() {
        return(
        <div id='members' className='panel'>
            <div className='panelTitle'>MEET OUR MEMBERS</div>
            <div id='word'>滑鼠移到團員臉上可查看團員介紹喔！</div>
            <div>
                <img id='group' src={group2} alt='group'></img>
                {
                    this.state.data.map((e,idx) =>
                    <div key={idx}>
                        <div className='mem' id={e.id}></div>
                        <div className='descr' id={'t_'+e.id}>{e.name}:<p dangerouslySetInnerHTML={{__html:e.description}}></p></div>
                    </div>)
                }
            </div>

        </div>
        );
    }
}

export default Members;