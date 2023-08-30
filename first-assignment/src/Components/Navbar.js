import React from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
        <React.Fragment>
     
     <p>Hallooo</p>
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          </div>
        </div>
      </nav>
      </React.Fragment>
       
    );
  }
}

export default Navbar;
