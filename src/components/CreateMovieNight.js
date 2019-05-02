import React from "react";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button,
  Fade,
  withStyles
} from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";
import { DateTime } from "luxon";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    width: 960,
    height: "100%",
    margin: "auto",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  formControl: {
    margin: "auto"
  }
});

const CreateMovieNight = props => {
  const {
    classes,
    onChangeMovieNight,
    onSubmitMovieNight,
    handleDateChange,
    date,
    currentTimeStamp
  } = props;
  return (
    <Fade in={true}>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={onSubmitMovieNight}>
          <Typography align="center" variant="h5">
            Create a new Movie Night
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              id="movieNightTitle"
              label="Movie Night Title"
              type="text"
              onChange={onChangeMovieNight}
            />
            <DatePicker
              margin="normal"
              label="Date picker"
              onChange={handleDateChange}
              value={DateTime.fromMillis(currentTimeStamp)}
            />
            <Button variant="text" color="primary" size="medium" type="submit">
              Create
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Fade>
  );
};

export default withStyles(styles)(CreateMovieNight);
