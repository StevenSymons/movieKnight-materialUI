import React, { Component, Fragment } from "react";
import MovieNightItem from "./MovieNightItem";
// import { movies } from "../moviesData";
import {
  Typography,
  TextField,
  FormControl,
  List,
  withStyles,
  Paper,
  Button
} from "@material-ui/core";

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
  },
  list: {
    maxWidth: 700,
    margin: "auto"
  }
});

class MovieNight extends Component {
  render() {
    const {
      classes,
      hasMovieNight,
      movieNightName,
      onChangeMovieNight,
      onSubmitMovieNight,
      movieList,
      removeMovie
    } = this.props;
    return (
      <Fragment>
        {!hasMovieNight ? (
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
                <Button
                  variant="text"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Create
                </Button>
              </FormControl>
            </form>
          </Paper>
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              {movieNightName}
            </Typography>
            <List className={classes.list}>
              {movieList.map(movie => {
                console.log(movie);
                return (
                  <MovieNightItem
                    key={movie.id}
                    id={movie.id}
                    movieTitle={movie.title}
                    removeMovie={removeMovie}
                  />
                );
              })}
            </List>
          </Paper>
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieNight);
