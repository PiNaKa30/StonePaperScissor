import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import MainScreen from "./js/screens/mainScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route path="/join/:matchId" children={<Child />}/>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Child() {
    let { matchId } = useParams();
  
    return (
        <MainScreen matchId={matchId}/>
    );
  }
