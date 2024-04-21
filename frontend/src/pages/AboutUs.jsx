import React, {useState, useEffect} from 'react';
import UserCard from '../components/UserCard.jsx';
import './AboutUs.css';

function AboutUs() {
    const [secretariat, setSecretariat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/data/secretariat.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSecretariat(data);
          } catch (error) {
            console.error('Error fetching secretariat data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <main className="container">
            <section>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-nowrap secretariatTitle">Secretariat</h2>
                    </div>
                </div>
                <div className="row">
                    {
                    secretariat.map((staff, index) => {
                        return (
                                <UserCard person={staff} key={index}/>
                            );
                        })
                    }
                </div>
            </section>
        </main>



    );
};

export default AboutUs;