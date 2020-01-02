import React from 'react';

import './App.scss';
import { HashRouter as Router } from "react-router-dom";
import CvContainer from './containers/CvContainer';




function App() {
  return (
    <Router basename="/">
    <div className="App">
    <img src="img/dot1.png" className="dot1"/>
    <img src="img/dot2.png" className="dot2"/>
    <img src="img/dot1.png" className="dot3"/>
    <img src="img/dot2.png" className="dot4"/>
     <CvContainer />
    </div>
    </Router>
  );
}

export default App;
