import React from 'react';


const Portfolio = () => {
    return(
        <div className='container noPadding'>
            <div className='col-xs-12' id='portfolio'>
                <h1 className='text-center'>Portfolio</h1>

                <div className='imgWrapper col-xs-12 col-sm-6'>
                    <img className='img-responsive portfolioImg' src='./assets/bakeryscreen.png'/>
                </div>

                <div className='imgWrapper col-xs-12 col-sm-6'>
                    <img className='img-responsive portfolioImg' src='./assets/cafescreen.png'/>
                </div>

                <div className='imgWrapper col-xs-12 col-sm-6'>
                    <img className='img-responsive portfolioImg' src='./assets/casascreen.png'/>
                </div>

                <div className='imgWrapper col-xs-12 col-sm-6'>
                    <img className='img-responsive portfolioImg' src='./assets/pokescreen.png'/>
                </div>


            </div>    
        </div>
    );
}

export default Portfolio;