import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserAssetPage from "./Pages/UserAssetPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={UserAssetPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
