import React, { Component } from 'react';
import './containers.css';
import group2 from '../pic/group2.jpeg';

var descriptions = [
    {name:'韓七張', description:'xxxxxxxx', d_id:'t_tenor', id:'tenor'},
    {name:'郭姿筠', description:'xxxxxxxx', d_id:'t_sop', id:'sop'},
    {name:'趙銓寬', description:'xxxxxxxx', d_id:'t_bass', id:'bass'},
    {name:'陳少迪', description:'xxxxxxxx', d_id:'t_mezzo', id:'mezzo'},
    {name:'徐立諺', description:'xxxxxxxx', d_id:'t_vp', id:'vp'},
    {name:'張思涵', description:'xxxxxxxx', d_id:'t_alto', id:'alto'},
];

class Members extends Component {
    render() {
        return(
        <div id='members' className='panel'>
            <div className='panelTitle'>MEMBERS</div>
            <div>
                <img id='group' src={group2} alt='group'></img>
                {
                    descriptions.map((e,idx) =>
                    <div key={idx}>
                        <div className='mem' id={e.id}></div>
                        <div className='descr' id={e.d_id}>{e.name}:{e.description}</div>
                    </div>)
                }
            </div>

        </div>
        );
    }
}

export default Members;