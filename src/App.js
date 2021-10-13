import { Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import ClientDashboard from "./components/ClientDashboard";
import RMDashboard from "./components/RMDashboard";
import SwitchDashboards from "./components/SwitchDashBoards";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {
  const [showRMDashboard, setShowRMDashboard] = useState(true);

  const currentPath = showRMDashboard ? '/client' : '/'
  const currentDashboard = showRMDashboard ? 'Switch to Client Dashboard' : 'Switch to Home Dashboard'
  const handleClick = () => {
    setShowRMDashboard(!showRMDashboard);
  }
  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar d-flex justify-content-around justify-content-lg-between">
        <h2>DFuture Web App</h2>
        <Link to={currentPath} onClick={handleClick}>{currentDashboard}</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={RMDashboard} />
            <Route path="/client" component={ClientDashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
