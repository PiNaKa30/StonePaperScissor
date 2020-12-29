import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import Typography from '@material-ui/core/Typography';


export default class HostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                //error
                fullWidth
                autoFocus
                id="userIdInput"
                label="Username"
                //helperText="Incorrect entry."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                //error
                fullWidth
                id="numRoundsInput"
                label="Rounds"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 99 } }}
                defaultValue={9}
                //helperText="Incorrect entry."
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
              <Typography variant="body1">Game Mode <span style={{marginRight: "36px"}}> </span>
                <FormControlLabel
                  value="standard"
                  control={<Radio color="primary" />}
                  label="Standard"
                />
                <FormControlLabel
                  value="twisted"
                  control={<Radio color="primary" />}
                  label="Twisted"
                />
              </Typography>
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
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
