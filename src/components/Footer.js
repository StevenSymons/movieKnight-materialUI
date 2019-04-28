import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: theme.palette.primary.dark,
    color: "white"
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.div}>
      <Typography variant="h6" color="inherit">
        The footer of awesomeness.
      </Typography>
      <Typography variant="body2" color="inherit">
        Created by Steven Symons with love. <i class="fas fa-heart" />{" "}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
