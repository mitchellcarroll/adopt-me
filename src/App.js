import React from 'react';
import ReactDOM from "react-dom";
import SearchParam from './SearchParams'
import { Router, Link } from "@reach/router";
import Details from './Details';

const App = () => {
  return (
    <React.StrictMode>
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
        </header>
      <Router>
        <SearchParam path="/"/>
        <Details path="/details/:id"/>
      </Router>
        
    </div>
    </React.StrictMode>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
