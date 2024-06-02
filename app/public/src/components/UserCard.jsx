import React from 'react';
import './UserCard.css';
import FormattedParagraph from './FormattedParagraph';

function UserCard({name, position, bio, email, imagePath, colWidth}) {
    return (
        <div className={"col-md-"+colWidth}>
            <div className="secretariatCard">
                <div>
                    <img className="secretariatImg" src={imagePath} />
                </div>

                <h4>{name}</h4>
                <h5>{position}</h5>
                <br/>
                <FormattedParagraph text={bio} />
                <h6 className="secretariatEmail">{email}</h6>
            </div>
        </div>
    )
};

export default UserCard;