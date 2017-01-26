import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class App extends Component {

  render() {
    return (
        <div>
          <div className='' id='navWrapper'>        
            <Navbar/>
          </div>
          
          <About/>
          <Portfolio/>
          <Contact onSubmitSuccess={() => console.log('submit success')}
                   onSubmitFail={() => console.log('submit fail')}/>
        </div>
    );
  };
};
