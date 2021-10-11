import { Router, Switch, Route } from "react-router-dom";
import ClientDashboard from "./components/ClientDashboard";
import RMDashboard from "./components/RMDashboard";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar d-flex justify-content-around justify-content-lg-between">
        <h2>DFuture Web App</h2>
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
