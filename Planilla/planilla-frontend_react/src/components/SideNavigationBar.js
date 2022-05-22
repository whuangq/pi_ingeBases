// import React from 'react';
// import { Link } from "react-router-dom";
// import Home from '../Home';
// import BenefitsEmployer from '../BenefitsEmployer';
// import Employees from '../Employees';
// import NotFound from '../NotFound';
// import '../App.css';


// const SideNavigationBar = (props) => {
//   return (
//     <div className="sidenav" style={divStyle}>
//       <Link to="/"><a className="App-link">Home</a></Link>
//       <Link to="/BenefitsEmployer"><a className="App-link">BenefitsEmployer</a></Link>
//       <Link to="/Employees"><a className="App-link">Employees</a></Link>
//     </div >
//  );
// }


// const divStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   position: 'relative',
//   justifyContent: 'center',
//   alignContent: 'space-between',

//   height: '80%',
//   width: '25%',
//   backgroundColor: 'black',
//   marginTop: '20pt',
//   marginBottom: '20pt',
  
//   zIndex: '1',
//   top: '0',
//   left: '0',
//   transition: '.5s ease',
//   overflowX: 'hidden',
// }

// export default SideNavigationBar;

import React from 'react';
import '../SideNavigationBarStyle.css';
import { slide as Menu } from 'react-burger-menu'


function SideNavigationBar() {
    return (
        <Menu>
            <a id="Home" className="menu-item" href="/">Home</a>
            <a id="BenefitsEmployer" className="menu-item" href="/BenefitsEmployer">BenefitsEmployer</a>
            <a id="Employees" className="menu-item" href="/Employees">Employees</a>
        </Menu>
    );
}

export default SideNavigationBar;

