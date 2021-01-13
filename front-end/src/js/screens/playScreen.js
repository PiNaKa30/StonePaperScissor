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
  }

  static getDerivedStateFromProps(props, current_state) {
    // if (!props.gameStarted) {
    //   props.history.push("/");
    // }
    return current_state;
  }

  render() {
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
                  <strong>5</strong>
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography variant="h5">
                  <strong>Shourya</strong>
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h5">
                  <strong>v/s</strong>
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography variant="h5">
                  <strong>Hulk</strong>
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h5">
                  <strong>4</strong>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={2}
          alignItems="center">
            <Grid item xs={12} style={{textAlign: "center"}}>
              <Typography variant="h6">
                  <strong>Round 1</strong>
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
            paddingTop: "48px"
          }}
        >
          <Grid item md={5}>
            <WaitingCard />
            <CustomizedSnackbars open={true} msg="You win" severity="success" />
          </Grid>
          <Grid item md={6}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item md={4}>
                <PlayingCard type="Stone" />
              </Grid>
              <Grid item md={4}>
                <PlayingCard type="Paper" />
              </Grid>
              <Grid item md={4}>
                <PlayingCard type="Scissor" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(PlayScreen);
