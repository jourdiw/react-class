import React, { Component } from "react";
// import WithQueryString from '../helpers/components/WithQueryString'
import ShowsSearch from '../components/Shows/ShowsSearch'

// isolate inital state, so we can use it if we want to reset to it
const initialState = {
  searching: false,
  query: "",
  results: null
};

class TvShows extends Component {
  state = { ...initialState };

  // execute the search once mounted on the dom, and 'fetch' API is available
  // componentDidMount = () => {
  //   const { location } = this.props; // react-router injects browsers "window.location" API
  //   const matches = location.search.match(/^\?q=(.*)/); // lookup for a query in the url
  //   if (matches) {
  //     const query = matches[1];
  //     this.setState({ query });
  //     this.doSearch(query);
  //   }
  // };

  // handleQueryChange = e => {
  //   const { history } = this.props; // react-router injects the browser's "history" API into the DOM
  //   const queryValue = e.target.value;

  //   history.replace(`?q=${queryValue}`);
  //   this.doSearch(queryValue);
  //   this.setState({ query: queryValue });
  // };

  // // query the api using fetch and old school promises.
  // doSearch = query => {
  //   if (query.length === 0) {
  //     this.setState(initialState);
  //     return;
  //   }
  //   this.setState({ searching: true });
  //   fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
  //     .then(res => res.json()) // extracting json from a reponse is another promise
  //     .then(json =>
  //       this.setState({
  //         searching: false,
  //         results: json
  //       })
  //     )
  //     .catch(err => console.error(err));
  // };

  render() {
    // const { searching, results, query } = this.state;

    // transform [{score, show}] into [show]
    // const shows = results ? results.map(r => r.show) : [];

    return (
      <div>
        <ShowsSearch />
        {/* <WithQueryString /> */}
      </div>
    );
  }
}

export default TvShows;
