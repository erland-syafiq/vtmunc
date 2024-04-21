import React from 'react';
import './UserCard.css';

function UserCard({person}) {
    const {name, position, bio, email, image} = person;
    return (
        <div class="col-md-4">
            <div class="secretariatCard">
                <div>
                    <img class="secretariatImg" src={"/Images/Secretariat_Headshots/" + image} />
                </div>

                <h4>{name}</h4>
                <h5>{position}</h5>
                <br/>
                <p>
                    {bio}
                </p>
                <h6 class="secretariatEmail">{email}</h6>
            </div>
        </div>
    )
};

export default UserCard;