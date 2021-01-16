import React from "react";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Stone from "../../images/stone.png";
import Paper from "../../images/paper.png";
import Scissor from "../../images/scissor.png";
import PlayingCard from "../components/playingCard";
import WaitingCard from "../components/waitingCard";
import CustomizedSnackbars from "../components/snackbar";

class PlayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      roundStatus: "MY_TURN",
      myScore: 0,
      opponentScore: 0,
      myName: "",
      opponentName: "",
      gameMode: "Standard",
      snackbarOpen: false,
      currentCard: ""
    };
    this.snackbarOptions = {
      msg: "",
      severity: ""
    }
    this.prevCards = [];
    this.cardMap = {
      0: "Stone",
      1: "Paper",
      2: "Scissor",
    };
  }

  static getDerivedStateFromProps(props, current_state) {
    // if (!props.gameStarted) {
    //   props.history.push("/");
    // }
    if (props.userInfo.isHost) {
      current_state.myName = props.gameInfo.hostName;
      current_state.opponentName = props.gameInfo.joineeName;
    } else {
      current_state.myName = props.gameInfo.joineeName;
      current_state.opponentName = props.gameInfo.hostName;
    }
    current_state.gameMode = props.gameInfo.gameMode;
    return current_state;
  }

  handleCardClick = (option) => {
    console.log("Card click",option,this.cardMap[this.prevCards[option]]);
    this.setState((prev_state) => ({
      currentCard : option 
    }));
  }

  generateCards = () => {
    let cardArray = [];
    if(this.state.roundStatus === "MY_TURN"){
      for (let i = 0; i < 3; i++) {
        cardArray.push(
          this.state.gameMode === "Standard" ? i : Math.floor(Math.random() * 3)
        );
      }
      this.prevCards = cardArray;
    } else {
      cardArray = this.prevCards;
    }
    
    return (
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item md={4}>
          <PlayingCard type={this.cardMap[cardArray[0]]} onClick={() => this.handleCardClick(0)} active={this.state.currentCard === 0} />
        </Grid>
        <Grid item md={4}>
          <PlayingCard type={this.cardMap[cardArray[1]]} onClick={() => this.handleCardClick(1)} active={this.state.currentCard === 1} />
        </Grid>
        <Grid item md={4}>
          <PlayingCard type={this.cardMap[cardArray[2]]} onClick={() => this.handleCardClick(2)} active={this.state.currentCard === 2} />
        </Grid>
      </Grid>
    );
  }

  generateWaitCard = () => {
    if(this.state.roundStatus === "MY_TURN"){
      return (<WaitingCard type={0} />);
    } else if(this.state.roundStatus === "OPPONENT_TURN"){
      return (<WaitingCard type={1} />);
    }
  }

  render() {
    {console.log(this.state)}
    return (
      <div>
        <AppBar
          position="static"
          color="primary"
          style={{ textAlign: "center" }}
        >
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item sm={2}>
                <Typography variant="h5">
                  <strong>{this.state.opponentScore}</strong>
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography variant="h5">
                  <strong>{this.state.opponentName}</strong>
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h5">
                  <strong>v/s</strong>
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography variant="h5">
                  <strong>{this.state.myName}</strong>
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h5">
                  <strong>{this.state.myScore}</strong>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h6">
              <strong>Round {this.state.round}</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          style={{
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            paddingTop: "48px",
          }}
        >
          <Grid item md={5}>
            {this.generateWaitCard()}
            <CustomizedSnackbars open={this.state.snackbarOpen} msg={this.snackbarOptions.msg} severity={this.snackbarOptions.severity} />
          </Grid>
          <Grid item md={6}>
            {this.generateCards()}
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(PlayScreen);
