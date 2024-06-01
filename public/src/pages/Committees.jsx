import React from 'react';
import useStaticData from '../hooks/useStaticData.jsx';
import Committee from '../components/Commitee';
import './Committees.css';

function Committees() {
    const committeeGroups = useStaticData("/data/committees.json", []);

    return (
        <main className="container">
            
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="text-nowrap committeesTitle">Committees</h2>
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
                                     <h3 className="text-nowrap">{group.group_name}</h3>
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