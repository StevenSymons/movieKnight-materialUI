import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import { movies } from "../moviesData";
import {
  Typography,
  TextField,
  FormControl,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Grid
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    width: 960,
    height: "100vh",
    margin: "auto",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3
  },
  formControl: {
    margin: "auto"
  },
  list: {
    maxWidth: 700,
    margin: "auto"
  }
});

const MovieNight = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <form>
        <Typography variant="h5">Create a new Movie Night</Typography>
        <FormControl>
          <TextField
            id="standard-search"
            label="Movie Night Title"
            type="search"
          />
        </FormControl>
      </form>
      <Typography variant="h6" align="center">
        Your Movie Night
      </Typography>
      <List className={classes.list}>
        {movies.map(movie => {
          return (
            <ListItem divider="true">
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={movie.movieTitle} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default withStyles(styles)(MovieNight);
