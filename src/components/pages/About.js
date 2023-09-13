import React from 'react';
import ProfPic from './assets/images/Profile pic.jpg'

function About() {
    return (
        <div>
            <div>
                <figure class="profile">
                    
                        <img className="my-pic" src={ProfPic} alt="Martin Apopot's Profile Picture"/>
                    
                </figure>
            </div>
            <p>
                My name is Martin Apopot. I recently graduated from the UTSA coding bootcamp. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
            </p>
        </div>
    );
};

export default About;