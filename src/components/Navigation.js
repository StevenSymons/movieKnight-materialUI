import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: 12
  }
});

class Navigation extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Tabs centered value={this.state.value} onChange={this.handleChange}>
          <Tab label="Search Movies" />
          <Tab label="Movie Night" />
          <Tab label="Spread the word" />
        </Tabs>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navigation);
