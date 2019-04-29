import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import Navigation from "./Navigation";
import MovieNight from "./MovieNight";
import Calendar from "./Calendar";

class App extends Component {
  state = {
    value: 0,
    hasMovieNight: false,
    movieNightName: "",
    movieList: []
  };

  onChangeMovieNight = e => {
    this.setState({
      movieNightName: e.target.value
    });
  };

  onSubmitMovieNight = e => {
    e.preventDefault();
    this.setState({
      hasMovieNight: true
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  addMovie = movie => {
    this.setState({
      movieList: [...this.state.movieList, movie]
    });
  };

  removeMovie = id => {
    console.log("remove is working!", id);
    const filteredMovieList = this.state.movieList.filter(movie => {
      return movie.id !== id;
    });
    this.setState({
      movieList: filteredMovieList
    });
  };

  render() {
    const { value, hasMovieNight, movieNightName, movieList } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Navigation value={value} handleChange={this.handleChange} />
        {value === 0 && <MovieList addMovie={this.addMovie} />}
        {value === 1 && (
          <MovieNight
            hasMovieNight={hasMovieNight}
            movieNightName={movieNightName}
            onChangeMovieNight={this.onChangeMovieNight}
            onSubmitMovieNight={this.onSubmitMovieNight}
            movieList={movieList}
            removeMovie={this.removeMovie}
          />
        )}
        {value === 2 && <Calendar />}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
