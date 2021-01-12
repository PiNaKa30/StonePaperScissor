import React from "react";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
          color="default"
          style={{ textAlign: "center" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={2}>
                <Typography variant="h5">
                  <strong>5</strong>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="h5" color="primary">
                  <strong>Shourya</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5">
                  <strong>v/s</strong>
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="h5" color="primary">
                  <strong>Hulk</strong>
                </Typography>
              </Grid>
              <Grid item md={2}>
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
          alignItems="center"
          style={{
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
          }}
        >
          <Grid item md={6}>
            1
          </Grid>
          <Grid item md={6}>
            2
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(PlayScreen);
