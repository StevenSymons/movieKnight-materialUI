import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  form: {
    display: "flex"
  },
  formControl: {
    minWidth: 120,
    marginTop: 0,
    margin: theme.spacing.unit
  },
  formControl2: {
    flex: 1
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

const Filter = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <form className={classes.form}>
        <FormControl className={[classes.formControl, classes.formControl2]}>
          <TextField id="standard-search" label="Search" type="search" />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="selectGenre">Genre</InputLabel>
          <Select inputProps={{ name: "genre", id: "selectGenre" }}>
            <MenuItem>Action</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="selectSort">Sort By</InputLabel>
          <Select inputProps={{ name: "sortBy", id: "selectSort" }}>
            <MenuItem>Popularity</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
};

export default withStyles(styles)(Filter);
