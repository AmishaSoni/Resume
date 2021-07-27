
import './App.css';
import React from 'react';
import Home from './Resume/Home.js';
import './Home.css';
import Contact from './Resume/Contact.js'; 
import Qualify from './Resume/Qualify.js'; 
import Skill from './Resume/Skill.js'; 
import Project from './Resume/Project.js'; 
function App() {
 

  return (
   <div>
    <Home />
    <hr></hr>
    <Qualify />
    <hr></hr>
    <Skill />
    <hr></hr>
    <Project />
    <hr></hr>
    <Contact />
    </div>
  );


}





export default App;
