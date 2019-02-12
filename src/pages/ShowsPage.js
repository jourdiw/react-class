import React, { Component } from "react";

import { List as ShowList } from "../components/Shows";

class BatmanShows extends Component {
  state = {
    searching: true,
    results: []
  };

  // execute the search once mounted on the dom, and 'fetch' API is available
  componentDidMount = () => {
    this.doSearch();
  };

  // query the api using fetch and old school promises.
  doSearch = query => {
    fetch(`http://api.tvmaze.com/search/shows?q=batman`)
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
    const { searching, results } = this.state;

    // transform [{score, show}] into [show]
    const shows = results.map(r => r.show);

    return (
      <div>
        <h1>Batman shows</h1>
        {/** Only renders while searching (initial render) */
        searching && <p>Searching...</p>}
        {/** Renders when search is done AND we have results */
        !searching && results.length > 0 && (
          <div>
            <p>Found at least {results.length} Batman shows</p>
            <ShowList shows={shows} />
          </div>
        )}
      </div>
    );
  }
}

export default BatmanShows;
