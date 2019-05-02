import React from "react";
import { Tab, Tabs, AppBar, withStyles } from "@material-ui/core";

const styles = theme => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 2
  }
});

const Navigation = props => {
  const { value, handleChange } = props;
  const { classes } = props;
  return (
    <AppBar position="sticky" color="primary" className={classes.appbar}>
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Search Movies" />
        <Tab label="Movie Night" />
        <Tab label="Spread the word" />
      </Tabs>
    </AppBar>
  );
};

export default withStyles(styles)(Navigation);
