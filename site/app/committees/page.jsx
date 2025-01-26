import React from 'react';
import Committee from '../components/Commitee';
import './Committees.css';
import fetchStaticJSON from '../utils/fetchStaticJSON';

export const metadata = {
    title: "Committees",
    description: "Explore the heart of VTMUNC on our Committees page! Discover detailed information about each committee, including topics of discussion, background guides, and key objectives. Our committees cover a diverse range of global issues, providing a platform for delegates to engage in meaningful debates and develop solutions. Whether you're interested in international security, economic development, or human rights, the VTMUNC Committees page offers everything you need to prepare for and excel in your sessions. Enhance your Model United Nations experience by learning about the committees and their critical roles at VTMUNC. Visit now to get started!    "
}

async function Committees() {
    const committeeGroups = await fetchStaticJSON("/app/data/committees_2.json");

    return (
        <main className="container">
            
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-nowrap committeesTitle">The Committees</h1>
                </div>
            </div>
            {
                committeeGroups.map((group, groupIndex) => {
                    if (!group.committees) {
                        return
                    }
                    return (
                        <div key={groupIndex}>
                            <div className="row">
                                 <div className="col-12 text-center">
                                     <h3 className="text-nowrap committee-name">{group.group_name}</h3>
                                 </div>
                            </div>
                            <div className="row justify-content-around">
                                {
                                    group.committees.map((committee, committeIndex) => {
                                        return (<Committee key={committeIndex} committee={committee} />);
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            };

        </main>

    );
};

export default Committees;