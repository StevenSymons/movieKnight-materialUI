import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
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

class MovieList extends Component {
  state = {
    offset: "",
    page: "",
    totalPages: "",
    movies: [],
    totalMovies: "",
    genres: [],
    genreFilter: "",
    genreName: "",
    sortBy: "popularity",
    searchFilter: ""
  };

  handleClick = (offset, page) => {
    this.setState({ offset, page });
  };

  onGenreChange = e => {
    this.setState({
      genreFilter: e.target.value.id,
      genreName: e.target.value.name,
      searchFilter: ""
    });
  };

  onSortByChange = e => {
    this.setState({
      sortBy: e.target.value,
      searchFilter: ""
    });
  };

  onSubmitSearch = searchFilter => {
    this.setState({
      searchFilter
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.genreFilter !== this.state.genreFilter
    ) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          this.state.sortBy
        }.desc&include_adult=false&include_video=false&page=${
          this.state.page
        }&with_genres=${this.state.genreFilter}`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            movies: data.results,
            totalPages: data.total_pages
          })
        );
    } else if (prevState.searchFilter !== this.state.searchFilter) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${this.state.searchFilter}&page=${
          this.state.page
        }&include_adult=false`
      )
        .then(res => res.json())
        .then(moviesData =>
          this.setState({
            page: moviesData.page,
            totalPages: moviesData.total_pages,
            movies: moviesData.results,
            totalMovies: moviesData.total_results
          })
        );
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`
      ),
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          this.state.sortBy
        }.desc&include_adult=false&include_video=false&page=${
          this.state.page
        }&with_genres=${this.state.genreFilter}`
      )
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([genresData, moviesData]) => {
        this.setState({
          genres: genresData.genres,
          page: moviesData.page,
          totalPages: moviesData.total_pages,
          movies: moviesData.results,
          totalMovies: moviesData.total_results
        });
      });
  }

  render() {
    const { classes, addMovie } = this.props;
    const { totalPages, movies, genres, genreName, sortBy } = this.state;
    return (
      <div className={classes.root}>
        <Filter
          genres={genres}
          onGenreChange={this.onGenreChange}
          onSortByChange={this.onSortByChange}
          genreName={genreName}
          sortBy={sortBy}
          onChangeSearch={this.onChangeSearch}
          onSubmitSearch={this.onSubmitSearch}
        />
        <Grid container spacing={24}>
          {movies.map(movie => {
            return (
              <MovieListItem
                id={movie.id}
                movie={movie}
                key={movie.id}
                movieTitle={movie.title}
                image={movie.poster_path}
                genre_ids={movie.genre_ids}
                genres={genres}
                rating={movie.vote_average}
                addMovie={addMovie}
              />
            );
          })}
        </Grid>
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={totalPages}
          size="large"
          classes={{ root: classes.pagination }}
          onClick={(e, offset, page) => this.handleClick(offset, page)}
        />
      </div>
    );
  }
}
export default withStyles(styles)(MovieList);
