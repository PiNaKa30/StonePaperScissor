import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

export default class HostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      numRounds: 9,
      gameMode: "Standard",
    };
  }

  handleChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    if (key === "userName") {
      val = val.replace(/[^a-zA-Z0-9 #@!_]/g, "_");
    } else if (key === "numRounds") {
      val = parseInt(val < 1 ? 1 : val > 99 ? 99 : val);
    }
    this.setState({
      [key]: val,
    });
  };

  render() {
    console.log(this.state);
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
                id="hostIdInput"
                name="userName"
                label="Username"
                inputProps={{ maxLength: 25 }}
                helperText=""
                variant="outlined"
              />{" "}
              <br />
              <br />
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xm={6}>
                  <TextField
                    fullWidth
                    id="numRoundsInput"
                    label="Rounds"
                    type="number"
                    value={this.state.numRounds}
                    onChange={this.handleChange}
                    name="numRounds"
                    InputProps={{ inputProps: { min: 1, max: 99 } }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xm={6}>
                  <TextField
                    fullWidth
                    id="numRoundsInput"
                    label="Rounds"
                    type="number"
                    value={this.state.numRounds}
                    onChange={this.handleChange}
                    name="numRounds"
                    InputProps={{ inputProps: { min: 1, max: 99 } }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} style={{ paddingLeft: "36px" }}>
              <RadioGroup
                name="gameMode"
                value={this.state.gameMode}
                onChange={this.handleChange}
              >
                <Typography
                  variant="h6"
                  component={"span"}
                  className="colorPrimary"
                >
                  <strong>Game Mode</strong>
                </Typography>
                <FormControlLabel
                  value="Standard"
                  control={<Radio color="primary" />}
                  label="Standard"
                />
                <FormControlLabel
                  value="Twisted"
                  control={<Radio color="primary" />}
                  label="Twisted"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary">
                Host Game
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
