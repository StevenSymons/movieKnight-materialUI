import React, { Component, Fragment } from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex",
    position: "relative",
    height: 278,
    cursor: "pointer",
    border: "3px solid transparent",
    "&:hover": {
      border: "3px solid #ff4081"
    }
  },
  media: { width: 185 },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  contentLayout: {
    justifyContent: "center",
    width: "100%"
  }
});

class MovieListItem extends Component {
  render() {
    const {
      classes,
      movieTitle,
      image,
      genre_ids,
      genres,
      rating,
      movie,
      addMovie
    } = this.props;
    return (
      <Fragment>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <div>
              <CardMedia
                component="img"
                image={
                  image
                    ? "http://image.tmdb.org/t/p/w185" + image
                    : "https://via.placeholder.com/185x278.jpg?text=No%20Image"
                }
                className={classes.media}
              />
            </div>
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
                <Typography variant="h5" align="center">
                  {rating}
                </Typography>
              </CardContent>
              <Button
                className={classes.button}
                color="secondary"
                size="large"
                onClick={() => addMovie(movie)}
              >
                +
              </Button>
            </div>
          </Card>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieListItem);
