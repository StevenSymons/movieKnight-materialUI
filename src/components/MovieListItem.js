import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { movies } from "../moviesData";

const styles = theme => ({
  card: {
    display: "flex",
    position: "relative",
    height: 278
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
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container spacing={24} alignContent="space-between">
          {movies.map(movie => {
            return (
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <div>
                    <CardMedia
                      component="img"
                      image={movie.image}
                      className={classes.media}
                    />
                  </div>
                  <div className={classes.contentLayout}>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {movie.movieTitle}
                      </Typography>
                      <Typography variant="body1" align="center">
                        {movie.genre}
                      </Typography>
                      <Typography variant="body2" align="center">
                        {movie.rating}
                      </Typography>
                    </CardContent>
                    <Button
                      className={classes.button}
                      color="secondary"
                      size="large"
                    >
                      +
                    </Button>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieListItem);
