import React from 'react';
import ReactDOM from "react-dom";

import StoreDashboard from "./components/StoreDashboard/store-dashboard.jsx";

class App extends React.Component{

    render(){ return(
        <StoreDashboard/>

    );
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
