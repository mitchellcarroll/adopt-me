import React from 'react';
import ReactDOM from "react-dom";
import SearchParam from './SearchParams'

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
        <SearchParam />
    </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
