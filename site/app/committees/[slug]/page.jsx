import React from 'react';
import fetchStaticJSON from '@/app/utils/fetchStaticJSON';
import UserCard from '@/app/components/UserCard';
import './CommitteeDetails.css';
import FormattedParagraph from '@/app/components/FormattedParagraph';
import { notFound } from 'next/navigation';


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

export async function generateMetadata({ params }) {
    const committeeGroups = await fetchStaticJSON("/app/data/committees.json");
    const id = params.slug;
    const committee = findCommittee(committeeGroups, id);

    if (!committee) {
        notFound();
    }

    const title = committee.committee_name.substring(0, 60); // Ensure title is not too long
    const description = committee.committee_bio.substring(0, 160); // Ensure description is not too long
  
    return {
      title,
      description,
    };
}

export default async function CommitteeDetailsPage({params}) {
    const committeeGroups = await fetchStaticJSON("/app/data/committees.json");
    const id = params.slug;

    const committee = findCommittee(committeeGroups, id);

    if (!committee) {
        return {
            title: "Page not found",
            description: "Page you're looking for doesn't exist. ."
        }
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
                        <FormattedParagraph paragraphClassName="mt-3" text={committee.committee_bio} />
                        <a className="btn btn-primary btn-lg heroBtn" href={"/BackgroundGuides/" + committee.background_guide} target="_blank">
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

export async function generateStaticParams() {
    const committeeGroups = await fetchStaticJSON("/app/data/committees.json");

    const committees = []

    for (const group in committeeGroups) {
        for (const committee in group) {
            committees.push(committee)
        }
    }
    return committees.map((committee) => ({
        slug: committee.id
    }))
}