import React from "react";
import { Modal, withStyles } from "@material-ui/core";
import Youtube from "react-youtube";

const styles = theme => ({
  paper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
});

const MovieTrailer = props => {
  const { classes, open, closeMovieTrailer, trailerKey } = props;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1
    }
  };

  return (
    <Modal open={open} onClose={closeMovieTrailer}>
      <Youtube
        videoId={trailerKey}
        opts={opts}
        className={classes.paper}
        onEnd={closeMovieTrailer}
      />
    </Modal>
  );
};

export default withStyles(styles)(MovieTrailer);
