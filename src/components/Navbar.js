import React from 'react';


const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Arash Dai</a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse text-center">
          <ul className="nav navbar-nav navbar-right">
                <li><a href="#" className='navlink'>About</a></li>
                <li><a href="#" className='navlink'>Portfolio</a></li>
                <li><a href="#" className='navlink'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;