import React from 'react';
import './Commitee.css';
import {NavLink} from 'react-router-dom';

function Committee({committee}) {
    return (
        <div className="col-md-5 committeesCard">
            <h4 className="committeeLabel">
                {committee.committee_name}
            </h4>

            <NavLink to={"/committees/" + committee.id} className="committeesContainer">
                <img className="committeesImg" src={"/Images/Committees/" + committee.committee_image}/>
            </NavLink>
        </div> 
    );
};

export default Committee;