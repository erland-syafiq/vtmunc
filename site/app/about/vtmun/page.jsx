import React from 'react';
import './Vtmun.css';

export default function AboutVtmun() {
    return (
        <main className="container">
            <div className='row justify-content-center'>
                <h1 className="vtmunTitle">VTMUN</h1>
            </div>  

            <div className='row'>
            <div className='col-md-8'>
                <p className='whyParagraph'>
                Model United Nations at Virginia Tech is the premier international relations and diplomacy-based organization at Virginia Tech, dedicated to increasing interest in topics related to the United Nations and debate on both contemporary and historical global issues. The organization is split between three branches:  MUN@VT, our competitive collegiate travel team, VTMUNC, our conference for high school students, and BIRDMUNC, our conference for college students. <br/> <br/>
                Founded at the height of the pandemic in 2020 as the oldest branch of the organization, MUN@VT was started in an effort to help Virginia Tech students develop their skills in all things international relations, problem-solving, and public speaking through debate. Placing a focus on diplomacy and finding consensus regardless of opposing viewpoints, MUN@VT has swiftly risen to become one of the most elite collegiate MUN teams in North America, having placed in the top 30 twice in the last 2 years, ranking as high as 25th. In its short four years, MUN@VT has established itself as a powerhouse MUN school within the Southern collegiate circuit, and a strong competitor on the National circuit. Despite Virginia Tech’s natural association with our engineering program, MUN@VT highlights the strength of the school’s liberal arts program and its commitment to increasing its reputation. <br/> <br/>
                VTMUNC and BIRDMUNC represent our student-run efforts to grow interest in diplomacy and global policy for the next generation of diplomats and policymakers. These conferences provide a supportive environment for high schoolers and college students respectively to explore the world of international affairs and diplomacy, emphasizing creative problem-solving, collaboration, and a sense of diplomacy from our delegates. 
                </p>
            </div>
            <div className='col-md-4'>
                <img className="whyImg" src={"/Images/hokiebird.png"} />
            </div>
            
            </div>
        </main>        
    )
}