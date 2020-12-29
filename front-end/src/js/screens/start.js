import React from "react";
import "../../css/start.css";
import Grid from "@material-ui/core/Grid";
import FullWidthTabs from "../components/tabs";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          alignItems="center"
          //justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={1} />
          <Grid item xs={5} />
          <Grid item xs={5}>
            <FullWidthTabs />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}
