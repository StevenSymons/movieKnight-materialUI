import React, { Component, Fragment } from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Fade,
  Fab
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const styles = theme => ({
  card: {
    display: "flex",
    position: "relative",
    height: 278,
    "&:hover": {
      outline: "3px solid #7986cb"
    },
    "&:hover $contentLayout": {
      height: "70%"
    },
    "&:hover $buttonGroup": {
      bottom: theme.spacing.unit * 2
    }
  },
  media: { width: 185 },
  rightSide: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  contentLayout: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    transition: "height .5s"
  },
  buttonGroup: {
    position: "absolute",
    bottom: -60,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-end",
    transition: "bottom .5s"
  },
  score: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.dark,
    height: 60,
    width: 60,
    borderRadius: "50%",
    margin: "0 auto",
    marginTop: 20
  },
  scoreInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    height: 52,
    width: 52,
    borderRadius: "50%"
  },
  scoreText: {
    color: theme.palette.primary.dark
  },
  leftSide: {
    position: "relative"
  },
  fab: {
    position: "absolute",
    backgroundColor: "transparent",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1.3)",
    transition: "transform .2s",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
});

class MovieListItem extends Component {
  state = {
    isHovered: false
  };

  handleMouseEnter = () => {
    this.setState({
      isHovered: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovered: false
    });
  };

  render() {
    const {
      classes,
      movieTitle,
      image,
      genre_ids,
      genres,
      rating,
      movie,
      addMovie,
      openMovieDetails,
      openMovieTrailer
    } = this.props;
    return (
      <Fragment>
        <Fade in={true}>
          <Grid item xs={12} sm={6}>
            <Card
              className={classes.card}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className={classes.leftSide}>
                <CardMedia
                  component="img"
                  image={
                    image
                      ? "http://image.tmdb.org/t/p/w185" + image
                      : "https://via.placeholder.com/185x278.jpg?text=No%20Image"
                  }
                  className={classes.media}
                />
                {this.state.isHovered && (
                  <Fade in={true}>
                    <Fab
                      className={classes.fab}
                      onClick={() => openMovieTrailer(movie.id)}
                    >
                      <PlayCircleOutlineIcon
                        color="secondary"
                        fontSize="large"
                      />
                    </Fab>
                  </Fade>
                )}
              </div>
              <div className={classes.rightSide}>
                <div className={classes.contentLayout}>
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {movieTitle}
                    </Typography>
                    <Typography variant="body1" align="center">
                      {genre_ids[0]
                        ? genres.filter(genre => {
                            return genre.id === genre_ids[0];
                          })[0].name
                        : "No genre available"}
                    </Typography>
                    <div className={classes.score}>
                      <div className={classes.scoreInner}>
                        <Typography
                          className={classes.scoreText}
                          variant="h5"
                          align="center"
                        >
                          {rating}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className={classes.buttonGroup}>
                  <Button
                    className={classes.button}
                    color="secondary"
                    size="small"
                    onClick={() => openMovieDetails(movie)}
                  >
                    Read More
                  </Button>
                  <Button
                    className={classes.button}
                    color="secondary"
                    size="medium"
                    variant="contained"
                    onClick={() => addMovie(movie)}
                  >
                    Add to Movie Night
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieListItem);
