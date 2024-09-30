import React from 'react';
import './Blacksburg.css';

export default function AboutBlacksburg() {
    return (
        <main className="container">
        <div className='row justify-content-center'>
                <h1 className="blacksburgTitle">Virginia Tech and Blacksburg</h1>
        </div>  
        <div className='row'>
            <div className='col-md-12'>
                <p className='whyParagraph'>
                Founded in 1872, Virginia Tech is housed in Blacksburg, Virginia, a town nestled in the heart of the picturesque Blue Ridge Mountains. As a school built on eight different core values, our students hold dear the ideas of brotherhood, honor, leadership, sacrifice, service, loyalty, duty, and “Ut Prosim” (That I May Serve). Our university’s academics are held in high regard, boasting a challenging and rewarding experience, but all students are brought together by one unique feeling: the spirit of a “Hokie.” <br/> <br/>
                Whether you’re walking down University City Boulevard or cruising through the Residential Quad, our Hokie spirit radiates from the walkways, the students, the buildings, and the overall atmosphere. We are Hokie Nation, home of the Hokies. As you spend a weekend with us, we ask that you embody what it means to be a Hokie and explore the finest Blacksburg has to offer. <br/> <br/>
                That’s because Blacksburg isn't just a college town; it's an adventurer's paradise. Lace up your hiking boots and explore the cascading beauty of Pandapas Pond. Feeling more adventurous? Kayak down the historic New River, a thrilling journey through breathtaking landscapes. The Town of Blacksburg's story unfolds on its charming streets. Stroll through the carefully preserved areas listed on the National Register of Historic Places. History buffs can delve deeper at the Virginia Tech Heritage Center, where local stories come alive. Art lovers can visit the Moss Arts Center and appreciate the exhibits and productions that visit Blacksburg. You can enjoy delicious treats from our dining halls or experience the treat of local businesses of Blacksburg. <br/> <br/>
                When you are not in committee session, try the delicious eats at Boardwalk or Benny’s or simply explore what our campus has to offer like the Hahn Horticulture Garden. Regarded as one of the most beautiful universities in the United States, the town of Blacksburg is safe and accessible to different modes of transportation! With the Roanoke-Blacksburg Regional Airport, Amtrak station in nearby Roanoke, and Smart Way buses, it is safe and easy to reach Virginia Tech. With the Blacksburg Transit (BT) bus system, hotels and stations are conveniently and freely connected to Hokie Nation. <br/> <br/>
                As you call Hokie Nation your home for the weekend, we know you will discover your inner Hokie spirit and be eager to come back for more. <br/> <br/>

                </p>
            </div>
            {/* <div className='col-md-4'>
                <img className="whyImg" src={"/Images/AboutUsGroupPhoto2.jpg"} />
            </div> */}
            
        </div>
    </main>          
    )
}