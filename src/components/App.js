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
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Navigation value={value} handleChange={this.handleChange} />
        {value === 0 && <MovieList />}
        {value === 1 && <MovieNight />}
        {value === 2 && <Calendar />}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
