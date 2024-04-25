import React from 'react';
import { useParams } from 'react-router-dom';
import useStaticData from '../hooks/useStaticData';
import NoPage from './NoPage.jsx';
import './CommitteeDetails.css';
import UserCard from '../components/UserCard.jsx';
import FormattedParagraph from '../components/FormattedParagraph.jsx';

function findCommittee(committeeGroups, queryId) {
    for (const group of committeeGroups) {
        for (const committee of group.committees) {
            if (committee.id == queryId) {
                return committee;
            }
        }
    }

    return null;
}

export default function CommitteeDetails() {

    const committeeGroups = useStaticData('/data/committees.json');
    const {id} = useParams();
    if (!committeeGroups) {
        return null;
    }

    const committee = findCommittee(committeeGroups, id);

    if (!committee) {
        return <NoPage />
    }

    const isOneChair = committee.co_chair_name == null;
    


    return (
        <main className="container">
            <section className="committeeDetails">
                <div className="row mt-3 d-flex justify-content-aroudn">
                    <div className="col-md-6 pb-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="committeeImg" src={"/Images/Committees/" + committee.committee_image }/>
                            </div>
                            <div className="col-md-9 committeeTitle">
                                <h3>{committee.committee_name}</h3>
                            </div>                
                        </div>
                        
                        {/* <p className="mt-3" >{committee.committee_bio}</p> */}

                        <FormattedParagraph paragraphClassName="mt-3" text={committee.committee_bio} />
                        <a className="btn btn-primary btn-lg heroBtn" href={"/background_guides/" + committee.background_guide} target="_blank">
                            <h5 className="backgroundGuideButton">
                                Background Guide
                            </h5>
                        </a>
                    </div>       
                    {
                        isOneChair ? 
                            <UserCard colWidth={6} name={committee.chair_name} position={committee.chair_position} bio={committee.chair_bio} email={committee.chair_email} imagePath={"/Images/Chair_Headshots/" + committee.chair_image}/>
                        :
                        <>
                            <UserCard colWidth={3} name={committee.chair_name} position={committee.chair_position} bio={committee.chair_bio} email={committee.chair_email} imagePath={"/Images/Chair_Headshots/" + committee.chair_image}/> 
                            <UserCard colWidth={3} name={committee.co_chair_name} position={committee.co_chair_position} bio={committee.co_chair_bio} email={committee.co_chair_email} imagePath={"/Images/Chair_Headshots/" + committee.co_chair_image}/> 
                        </>
                    } 
                </div>
            </section>
        </main>
    )
}
