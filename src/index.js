import React, {Component} from "react";
import ReactDOM from "react-dom";

import App from "./App";

//const App = ()=> <h1>Hola Mundo</h1>

class App extends Component{
  render(){
    return <h1>Hola Mundo</h1>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
