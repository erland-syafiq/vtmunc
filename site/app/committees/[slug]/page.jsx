import React from 'react';
import fetchStaticJSON from '@/app/utils/fetchStaticJSON';
import UserCard from '@/app/components/UserCard';
import './CommitteeDetails.css';
import FormattedParagraph from '@/app/components/FormattedParagraph';
import { notFound, permanentRedirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';


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

function findCommitteeFromName(committeeGroups, queryId) {
    console.log(queryId);
    for (const group of committeeGroups) {
        for (const committee of group.committees) {
            const urlName = committee.committee_name
                .replace(/[:(),<>]/g, "") // Remove specified characters
                .replace(/ /g, "-") // Replace spaces with hyphens
                .toLowerCase(); 
            console.log(urlName);
            console.log(decodeURI(queryId));
            if (urlName == decodeURI(queryId)) {
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
        // Attempts to find a matching url from the old ASP.NET url system
        const alt_committee = findCommitteeFromName(committeeGroups, id);
        if (!alt_committee) {
            notFound();
        }
        permanentRedirect(`/committees/${alt_committee.id}`);
    }

    const isOneChair = committee.co_chair_name == null;
    


    return (
        <main className="container">
            <section className="committeeDetails">
                <div className="row mt-3 d-flex justify-content-aroudn">
                    <div className="col-md-6 pb-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="committeeImg" src={"/images/committees/" + committee.committee_image }/>
                            </div>
                            <div className="col-md-9 committeeTitle">
                                <h3>{committee.committee_name}</h3>
                            </div>                
                        </div>
                        <FormattedParagraph paragraphClassName="mt-3" text={committee.committee_bio} />
                        <a className="btn btn-primary btn-lg heroBtn" href={"/background-guides/" + committee.background_guide} target="_blank">
                            <h5 className="backgroundGuideButton">
                                Background Guide
                            </h5>
                        </a>
                    </div>       
                    {
                        isOneChair ? 
                            <UserCard colWidth={6} name={committee.chair_name} position={committee.chair_position} bio={committee.chair_bio} email={committee.chair_email} imagePath={"/images/chair-headshots/" + committee.chair_image}/>
                        :
                        <>
                            <UserCard colWidth={3} name={committee.chair_name} position={committee.chair_position} bio={committee.chair_bio} email={committee.chair_email} imagePath={"/images/chair-headshots/" + committee.chair_image}/> 
                            <UserCard colWidth={3} name={committee.co_chair_name} position={committee.co_chair_position} bio={committee.co_chair_bio} email={committee.co_chair_email} imagePath={"/images/chair-headshots/" + committee.co_chair_image}/> 
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