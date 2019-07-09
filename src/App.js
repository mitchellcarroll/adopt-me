import React, { useState } from 'react';
import ReactDOM from "react-dom";
import SearchParam from './SearchParams'
import { Router, Link } from "@reach/router";
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('peru');
  return (
      <ThemeContext.Provider value = {themeHook}>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
        </header>
      <Router>
        <SearchParam path="/"/>
        <Details path="/details/:id"/>
      </Router>
    </div>
    </ThemeContext.Provider>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));