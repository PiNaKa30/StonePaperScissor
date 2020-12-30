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
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
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
            <FullWidthTabs />
          </Grid>
          <Grid item md={1} />
        </Grid>
      </div>
    );
  }
}
