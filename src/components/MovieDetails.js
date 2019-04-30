import React from "react";
import {
  Modal,
  Typography,
  withStyles,
  Table,
  TableCell,
  TableRow,
  Button
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    display: "flex",
    position: "absolute",
    width: 960,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    borderRadius: 4,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    flex: 1
  },
  rightSide: {
    marginLeft: theme.spacing.unit * 2
  },
  poster: {
    borderRadius: 4
  },
  button: {
    marginTop: "auto"
  },
  fab: {
    position: "absolute",
    top: 0,
    right: 0
  }
});

const MovieDetails = props => {
  const { classes, open, closeMovieDetails, movie, addMovie } = props;
  return (
    <Modal open={open} onClose={closeMovieDetails}>
      <div className={classes.paper}>
        <div className={classes.leftSide}>
          <Typography variant="h4" gutterBottom={true}>
            {movie.title}
          </Typography>
          <hr />
          <Table>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>{movie.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Release Date</TableCell>
              <TableCell>{movie.release_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Rating</TableCell>
              <TableCell>{movie.vote_average}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Overview</TableCell>
              <TableCell>{movie.overview}</TableCell>
            </TableRow>
          </Table>
          <Button
            className={classes.button}
            fullWidth={true}
            variant="contained"
            color="secondary"
            onClick={() => addMovie(movie)}
          >
            Add to Movie Night
          </Button>
        </div>
        <div className={classes.rightSide}>
          <img
            className={classes.poster}
            alt={"image" + movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "https://via.placeholder.com/300x450.png?text=No%20Image"
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(MovieDetails);
