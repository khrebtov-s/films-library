import React from "react";
import Header from "../Header";
import ErrorIndicator from "../ErrorIndicator";
import FilmsBlock from "../FilmsBlock";

import "./App.css";

export default class App extends React.Component {
  state = {
    hasError: false,
    searchParam: "",
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  setSearchQuery = (searchParam) => {
    this.setState({ searchParam });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="App">
        <Header setSearchQuery={this.setSearchQuery} />
        <FilmsBlock search={this.state.searchParam} />
      </div>
    );
  }
}
