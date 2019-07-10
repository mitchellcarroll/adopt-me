import React, { useState } from 'react';
import ReactDOM from "react-dom";
import SearchParam from './SearchParams'
import { Router } from "@reach/router";
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const App = () => {
  const themeHook = useState('peru');
  return (
      <ThemeContext.Provider value = {themeHook}>
    <div>
      <NavBar />
      <Router>
        <SearchParam path="/"/>
        <Details path="/details/:id"/>
      </Router>
    </div>
    </ThemeContext.Provider>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));