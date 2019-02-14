import React from 'react'
import { Header, Input } from "semantic-ui-react";
import { List as ShowList } from '../../components/Shows'

class ShowsSearch extends React.Component {
    state = {
        searching: false,
        results: null,
        query: ""
    }

    componentDidMount = () => {
        // const { query } = this.props
        // this.doSearch(query)
        const { location } = this.props; // react-router injects browsers "window.location" API
        const matches = location.search.match(/^\?q=(.*)/); // lookup for a query in the url
        if (matches) {
          const query = matches[1];
          this.setState({ query });
          this.doSearch(query);
        }
    }

    doSearch = query => {
        this.setState({ searching: true })
        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json()) // extracting json from a reponse is another promise
            .then(json =>
                this.setState({
                searching: false,
                results: json
                })
            )
            .catch(err => console.error(err));
    }

    handleQueryChange = e => {
        // const { search } = window.location; // react-router injects the browser's "history" API into the DOM
        const queryValue = e.target.value;
    
        // search.replace(`?q=${queryValue}`);
        this.doSearch(queryValue);
        this.setState({ query: queryValue });
      };
    
    render () {
        const { searching, results } = this.state
        const { query, onChange } = this.props
        const shows =  results ? results.map(r => r.show) : []
        return (
            <>
                <Header>Search Tv Shows</Header>
                <Input
                    type="search"
                    icon="search"
                    value={ query }
                    onChange={this.handleQueryChange}
                />
                {/** Only renders while searching (initial render) */}
                {searching && <p>Searching...</p>}
                {/** Renders when search is done AND we have results */}
                {!searching && results && (
                <div>
                    <p>Found at least {results.length} Tv shows</p>
                    <ShowList shows={shows} />
                </div>
                )}
            </>
        )
    }
}

export default ShowsSearch