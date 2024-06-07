import React from 'react';
import './Commitee.css';
import Link from 'next/link';

function Committee({committee}) {
    return (
        <div className="col-md-5 committeesCard">
            <h4 className="committeeLabel">
                {committee.committee_name}
            </h4>

            <Link href={"/committees/" + committee.id} className="committeesContainer">
                <img className="committeesImg" src={"/images/committees/" + committee.committee_image}/>
            </Link>
        </div> 
    );
};

export default Committee;