import { Button } from "reactstrap";
import UserCard from "./components/UserCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => (
  <div className="text-center m-3 p-3">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
