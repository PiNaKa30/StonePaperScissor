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
import PlayScreen from "./js/screens/playScreen";
import socketIOClient from "socket.io-client";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
    };
    this.socket = null;
    this.gameInfo = null;
    this.userInfo = null;
  }

  componentDidMount() {
    this.socket = socketIOClient("/");
    this.registerListeners();
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  registerListeners = () => {
    this.socket.on("START_GAME", (data) => {
      console.log("Game Started !", data);
      this.gameInfo = data;
      this.setState({
        gameStarted: true,
      });
    });
  };

  joinMatch = (userId, matchId, isHost) => {
    let data = {
      userId,
      matchId,
      isHost,
    };
    this.userInfo = data;
    this.socket.emit("JOIN_ROOM", data);
    // if (!isHost) {
    //   this.setState({
    //     gameStarted: true,
    //   });
    // }
  };

  render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <MainScreen joinMatch={this.joinMatch} gameStarted={this.state.gameStarted}/>
            </Route>
            <Route path="/play">
              <PlayScreen gameStarted={this.state.gameStarted} gameInfo={this.gameInfo} userInfo={this.userInfo} />
            </Route>
            <Route
              path="/join/:matchId"
              children={<Child joinMatch={this.joinMatch} gameStarted={this.state.gameStarted} />}
            />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      );
    }
  
}

function Child(props) {
  let { matchId } = useParams();

  return <MainScreen matchId={matchId} joinMatch={props.joinMatch} gameStarted={props.gameStarted} />;
}
