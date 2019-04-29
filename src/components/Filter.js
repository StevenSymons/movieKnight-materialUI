import React, { Component } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  withStyles,
  TextField,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  form: {
    display: "flex"
  },
  formSearch: {
    display: "flex"
  },
  formControl: {
    minWidth: 120,
    marginTop: 0,
    margin: theme.spacing.unit
  },
  formControl2: {
    flex: 1
  },
  formButton: {
    marginTop: "auto"
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

class Filter extends Component {
  state = {
    searchFilter: ""
  };

  renderValue = value => {
    return value;
  };

  onChangeSearch = e => {
    this.setState({
      searchFilter: e.target.value
    });
  };

  render() {
    const {
      classes,
      genres,
      genreName,
      onGenreChange,
      onSortByChange,
      sortBy,
      onSubmitSearch
    } = this.props;
    return (
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <FormControl className={[classes.formControl, classes.formControl2]}>
            <div className={classes.formSearch}>
              <TextField
                id="standard-search"
                label="Search Movie"
                type="search"
                onChange={this.onChangeSearch}
                fullWidth={true}
              />
              <Button
                variant="text"
                color="primary"
                size="medium"
                onClick={e => onSubmitSearch(this.state.searchFilter)}
                classes={{ root: classes.formButton }}
              >
                <SearchIcon />
              </Button>
            </div>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="selectGenre">Genre</InputLabel>
            <Select
              inputProps={{ name: "genre", id: "selectGenre" }}
              onChange={onGenreChange}
              value={genreName}
              renderValue={() => this.renderValue(genreName)}
            >
              {genres.map(genre => (
                <MenuItem key={genre.id} value={genre}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="selectSort">Sort By</InputLabel>
            <Select
              inputProps={{ name: "sortBy", id: "selectSort" }}
              onChange={onSortByChange}
              value={sortBy}
            >
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="vote_average">Top Rated</MenuItem>
              <MenuItem value="release_date">Latest</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Filter);
