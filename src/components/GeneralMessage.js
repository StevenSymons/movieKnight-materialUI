import React from "react";
import { Snackbar, SnackbarContent, withStyles } from "@material-ui/core";

const styles = theme => ({
  snackBarRoot: {
    background: theme.palette.secondary.main
  }
});

const GeneralMessage = props => {
  const { open, snackBarInfo, classes, handleClose } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.snackBarRoot}
        message={<span>{snackBarInfo}</span>}
      />
    </Snackbar>
  );
};

export default withStyles(styles)(GeneralMessage);
