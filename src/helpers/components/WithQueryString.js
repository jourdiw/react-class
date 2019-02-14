import React, {Component} from 'react'

class WithQueryString extends Component {
    state = {
        query: ""
    }

    componentDidMount = () => {
        const { search } = window.location // get current location from window
        const matches = search.match(/^\?q=(.*)/); // lookup for a query in the url
        if (matches) {
            const query = matches[1];
            this.setState({ query });
        }
    }

    handleQueryChange = (query) => {
        if (window) {
            const { replaceState } = window.history
            replaceState({}, "Search", `?=${query}`)
            this.setState({ query })
        }
    }
    render() {
        const { query } = this.state
        return this.props.children(query, this.handleQueryChange)
    }
}

export default WithQueryString 