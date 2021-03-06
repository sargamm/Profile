import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Banner from './Banner.js';
import Projects from './Projects.js';
import Intro from'./Intro.js';
import Timeline from './Timeline'
import TechnicalProfiles from './TechnicalProfiles';
import CoCurricular from './CoCurricular';
import Loading from './loading';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Loading/> */}
      </header>
      <NavBar/>
      <Banner/>
      <h1 className="title" id="about"> ABOUT ME </h1>
      <Intro />
      <h1 className="title" id="projects"> PROJECTS </h1>
      <Projects/>
      <h1 className="title"> TECH-PROFILES </h1>
      <TechnicalProfiles/>
      <h1 className="title"> LIFE SO FAR </h1>
      <Timeline/>
      <h1 className="title"> CO-CURRICULARS </h1>
      <CoCurricular/>
    </div>
  );
}

export default App;
