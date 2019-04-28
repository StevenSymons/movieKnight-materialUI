import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MovieListItem from "./MovieListItem";
import Pagination from "material-ui-flat-pagination";

import Filter from "./Filter";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: 960,
    margin: "auto"
  },
  pagination: {
    textAlign: "center",
    padding: theme.spacing.unit * 3
  }
});

const MovieList = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Filter />
      <MovieListItem />
      <Pagination
        limit={10}
        total={100}
        size="large"
        classes={{ root: classes.pagination }}
      />
    </div>
  );
};
export default withStyles(styles)(MovieList);
