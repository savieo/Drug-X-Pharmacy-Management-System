import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import AppRouter from "./components/routes/AppRouter";

class Root extends React.Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
