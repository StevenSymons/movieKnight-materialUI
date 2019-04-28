import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import Navigation from "./Navigation";
import MovieNight from "./MovieNight";
import Calendar from "./Calendar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Navigation />
        <MovieList />
        <MovieNight />
        <Calendar />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
