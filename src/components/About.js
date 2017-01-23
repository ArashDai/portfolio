import React from 'react';


const About = () => {
    return(
        <div className='container noPadding'>
            <div className='col-xs-12' id='about'>
                <div className='imgWrapper col-xs-12 col-sm-offset-1 col-sm-4'>
                    <img id='profilePic' className='img-circle img-responsive center-block' src='./assets/profilepic.jpg'/>
                </div>
                <div className='aboutWrapper col-xs-12 col-sm-offset-2 col-sm-5'>
                    <p id='aboutContent'>
                        Front-End Developer & UI Designer.<br/> Experienced with React, Redux, Node, Express, Bootstrap, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;