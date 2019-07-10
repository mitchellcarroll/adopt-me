import React, { useState, lazy, Suspense } from 'react';
import ReactDOM from "react-dom";
import SearchParam from './SearchParams'
import { Router, Link } from "@reach/router";
import ThemeContext from './ThemeContext';

const Details = lazy(() => import('./Details'));

const App = () => {
  const themeHook = useState('peru');
  return (
      <ThemeContext.Provider value = {themeHook}>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>loading route ...</h1>}>
      <Router>
        <SearchParam path="/"/>
        <Details path="/details/:id"/>
      </Router>
      </Suspense>
    </div>
    </ThemeContext.Provider>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));