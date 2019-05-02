import React, { Component, Fragment } from "react";
import MovieNightItem from "./MovieNightItem";
import {
  Typography,
  List,
  ListSubheader,
  withStyles,
  Paper,
  Button
} from "@material-ui/core";
import CreateMovieNight from "./CreateMovieNight";

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
  list: {
    maxWidth: 700,
    margin: "auto"
  },
  buttonGroup: {
    maxWidth: 700,
    display: "flex",
    margin: "16px auto",
    justifyContent: "space-between"
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
      removeMovie,
      deleteMovieNight,
      handleDateChange,
      date,
      currentTimeStamp,
      handleTimeChange,
      times
    } = this.props;
    return (
      <Fragment>
        {!hasMovieNight ? (
          <CreateMovieNight
            onChangeMovieNight={onChangeMovieNight}
            onSubmitMovieNight={onSubmitMovieNight}
            handleDateChange={handleDateChange}
            date={date}
            currentTimeStamp={currentTimeStamp}
          />
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              {movieNightName}
            </Typography>
            <List
              className={classes.list}
              subheader={
                <ListSubheader component="div">
                  Date: {date.c.day}/{date.c.month}/{date.c.year}
                </ListSubheader>
              }
            >
              {movieList.map(movie => {
                return (
                  <MovieNightItem
                    key={movie.id}
                    id={movie.id}
                    movieTitle={movie.title}
                    removeMovie={removeMovie}
                    image={movie.poster_path}
                    handleTimeChange={handleTimeChange}
                    times={times}
                  />
                );
              })}
            </List>
            <div className={classes.buttonGroup}>
              <Button color="secondary" size="small" onClick={deleteMovieNight}>
                Delete Movie Night
              </Button>
              <Button variant="contained" color="secondary" size="small">
                Checkout calendar!
              </Button>
            </div>
          </Paper>
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieNight);
