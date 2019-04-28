import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
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
  const { classes } = props;
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
        <Button color="inherit">Login</Button>
      </ToolBar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
