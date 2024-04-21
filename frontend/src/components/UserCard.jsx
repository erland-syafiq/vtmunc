import React from 'react';
import './UserCard.css';

function UserCard({person}) {
    const {name, position, bio, email, image} = person;
    return (
        <div className="col-md-4">
            <div className="secretariatCard">
                <div>
                    <img className="secretariatImg" src={"/Images/Secretariat_Headshots/" + image} />
                </div>

                <h4>{name}</h4>
                <h5>{position}</h5>
                <br/>
                <p>
                    {bio}
                </p>
                <h6 className="secretariatEmail">{email}</h6>
            </div>
        </div>
    )
};

export default UserCard;