import React, { Component } from "react";

import { List as ShowList } from "../components/Shows";

// isolate inital state, so we can use it if we want to reset to it
const initialState = {
  searching: false,
  query: "",
  results: null
};

class TvShows extends Component {
  state = { ...initialState };

  // execute the search once mounted on the dom, and 'fetch' API is available
  componentDidMount = () => {
    // this.doSearch(); do not execute search on mount anymore
  };

  handleQueryChange = e => {
    const queryValue = e.target.value;

    // execute search only if there is at least a letter
    if (queryValue.length > 0) {
      this.doSearch(queryValue);
      this.setState({ query: queryValue });
    } else {
      // else reset search
      this.setState(initialState);
    }
  };

  // query the api using fetch and old school promises.
  doSearch = query => {
    this.setState({ searching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json()) // extracting json from a reponse is another promise
      .then(json =>
        this.setState({
          searching: false,
          results: json
        })
      )
      .catch(err => console.error(err));
  };

  render() {
    const { searching, results, query } = this.state;

    // transform [{score, show}] into [show]
    const shows = results ? results.map(r => r.show) : [];

    return (
      <div>
        <h1>Search Tv Shows</h1>
        <p>
          <input
            type="search"
            value={query}
            onChange={this.handleQueryChange}
          />
        </p>
        {/** Only renders while searching (initial render) */
        searching && <p>Searching...</p>}
        {/** Renders when search is done AND we have results */
        !searching && results && (
          <div>
            <p>Found at least {results.length} Tv shows</p>
            <ShowList shows={shows} />
          </div>
        )}
      </div>
    );
  }
}

export default TvShows;
