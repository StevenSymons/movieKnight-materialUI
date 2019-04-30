import React from "react";
import {
  withStyles,
  AppBar,
  Typography,
  Button,
  IconButton,
  Badge
} from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = theme => ({
  appbar: {
    backgroundColor: theme.palette.primary.dark
  },
  title: {
    flex: 1
  }
});

const Header = props => {
  const { classes, goToSignIn } = props;
  return (
    <AppBar position="static" color="primary" className={classes.appbar}>
      <ToolBar>
        <Typography
          className={classes.title}
          component="h2"
          variant="h5"
          color="inherit"
        >
          MovieKnight
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Button color="inherit" onClick={goToSignIn}>
          Login
        </Button>
      </ToolBar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
