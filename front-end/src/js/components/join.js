import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

export default class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      joinCode: "123456",
      isHost: true,
    };
  }

  handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    if (key === "userName") {
      val = val.replace(/[^a-zA-Z0-9 #@!_]/g, "_");
    }
    this.setState({
      [key]: val,
    });
  };

  render() {
    console.log(this.state);
    if (!this.state.isHost) {
      return (
        <div>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  //error
                  fullWidth
                  autoFocus
                  value={this.state.userName}
                  onChange={this.handleChange}
                  id="joinIdInput"
                  name="userName"
                  label="Username"
                  inputProps={{ maxLength: 25 }}
                  //helperText="Incorrect entry."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  //error
                  fullWidth
                  value={this.state.joinCode}
                  onChange={this.handleChange}
                  id="joinCodeInput"
                  name="joinCode"
                  label="Match Id"
                  inputProps={{ maxLength: 6 }}
                  //helperText="Incorrect entry."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary">
                  Join Game
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <Alert severity="info">Waiting for another player to join</Alert>
          <br />
          <Typography variant="h5" component={"span"}>
            Match Id: &nbsp;
          </Typography>
          <Typography variant="h5" component={"span"} className="colorPrimary">
            <strong>{this.state.joinCode}</strong>
          </Typography>
        </div>
      );
    }
  }
}
