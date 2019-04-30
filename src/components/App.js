import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import Navigation from "./Navigation";
import MovieNight from "./MovieNight";
import Calendar from "./Calendar";
import GeneralMessage from "./GeneralMessage";
import SignIn from "./SignIn";

class App extends Component {
  state = {
    value: 0,
    hasMovieNight: false,
    movieNightName: "",
    movieList: [],
    open: false,
    snackBarInfo: ""
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

  handleClose = () => {
    this.setState({ open: false });
  };

  addMovie = movie => {
    this.setState({
      movieList: [...this.state.movieList, movie],
      open: true,
      snackBarInfo: `Added ${movie.title} to your movie night!`
    });
  };

  removeMovie = id => {
    const filteredMovieList = this.state.movieList.filter(movie => {
      return movie.id !== id;
    });
    this.setState({
      movieList: filteredMovieList
    });
  };

  deleteMovieNight = () => {
    this.setState({
      movieNightName: "",
      hasMovieNight: false,
      movieList: []
    });
  };

  goToSignIn = value => {
    this.setState({
      value: 4
    });
  };

  render() {
    const {
      value,
      hasMovieNight,
      movieNightName,
      movieList,
      open,
      snackBarInfo
    } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Header goToSignIn={this.goToSignIn} />
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
            deleteMovieNight={this.deleteMovieNight}
          />
        )}
        {value === 2 && <Calendar />}
        {value === 4 && <SignIn />}
        <Footer />
        <GeneralMessage
          open={open}
          snackBarInfo={snackBarInfo}
          handleClose={this.handleClose}
        />
      </Fragment>
    );
  }
}

export default App;
