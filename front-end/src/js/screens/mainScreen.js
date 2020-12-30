import React from "react";
import "../../css/start.css";
import Grid from "@material-ui/core/Grid";
import FullWidthTabs from "../components/tabs";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import signs from "../../images/signs.jpg";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from '@material-ui/icons/Home';
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';
import MenuIcon from "@material-ui/icons/Menu";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHost: false,
      matchId: this.props.matchId || "",
      hostError: "",
      joinError: ""
    }
    this.hostInfo = null;
    this.joinInfo = null;
  }

  handleHost = (hostInfo) => {
    this.hostInfo = hostInfo;
    console.log("Screen parent", hostInfo);
    this.sendHostRequest(hostInfo);
  }

  handleJoin = (joinInfo) => {
    console.log(joinInfo);
    this.joinInfo = joinInfo;
    this.sendJoinRequest(joinInfo);
  }

  sendHostRequest = (hostInfo) => {
    let data = {
      userId: hostInfo.userName,
      numRounds: hostInfo.numRounds,
      gameMode: hostInfo.gameMode
    };
    axios.post(`/host`, data)
      .then(res => {
        res = res.data;
        console.log(res);
        if(res.type === "Success"){
          this.setState({
            ...this.state,
            isHost: true,
            matchId: res.data.matchId
          });
        } else {
          this.setState({
            ...this.state,
            hostError: res.message
          });
        }
      });
  }

  sendJoinRequest = (joinInfo) => {
    let data = {
      userId: joinInfo.userName,
      matchId: joinInfo.joinCode
    };
    axios.post(`/join`, data)
      .then(res => {
        res = res.data;
        console.log(res);
        if(res.type === "Success"){
          this.setState({
            ...this.state,
            isHost: true,
            matchId: data.matchId
          });
        } else {
          this.setState({
            ...this.state,
            joinError: res.message
          });
        }
      });
  }

  render() {
    console.log("Rerender");
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          <IconButton edge="start" size="small" color="primary" aria-label="home" style={{backgroundColor: "white", marginRight: "16px"}} href="/">
            <HomeIcon />
          </IconButton>
            <Typography variant="h5">
              <strong>Stone Paper Scissor</strong>
            </Typography>
            <Button
              variant="contained"
              color="default"
              href="https://github.com/PiNaKa30/StonePaperScissor"
              startIcon={<GitHubIcon />}
              target="_blank"
              rel="noopener"
              style={{
                marginRight: "0px",
                position: "absolute",
                right: "24px",
              }}
            >
              View On Github
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={2}
          alignItems="center"
          //justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item md={1} />
          <Grid item md={5}>
            <img
              src={signs}
              alt="Image"
              style={{ width: "75%", height: "75%" }}
            />
          </Grid>
          <Grid item md={5}>
            <FullWidthTabs matchId={this.state.matchId} submitHost={this.handleHost} submitJoin={this.handleJoin} isHost={this.state.isHost} hostError={this.state.hostError} joinError={this.state.joinError} />
          </Grid>
          <Grid item md={1} />
        </Grid>
      </div>
    );
  }
}
