import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Dropdown from './components/Dropdown';
// import Hero from './components/Hero';
import HomePage from './components/HomePage';
// import InfoSection from './components/InfoSection';
// import Navbar from './components/Navbar';
// import WorkPage from './components/WorkPage';
// import { infoData } from './data/infoData';
// import { SlideData } from './data/sliderData';
import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/or-architecture" exact component={HomePage} />
        {/* <Route path="/Works/:projname" component={WorkPage} /> */}
      </Switch>
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
    </>
  );
}

export default App;
