import React, {Component} from 'react'
import SearchResult from "./SearchResult";

class Search extends Component {
  state = {
    hits: [{"_source": {"title": "-empty-", "categories":["livsstil","natur","NRK-arkivet"]}}],
  };


  handleInputChange = async () => {
    const encodedQuery = encodeURIComponent(this.search.value);
    const encodedCategory = encodeURIComponent(this.category.value);
    const url = `/query/boost?q=${encodedQuery}&category=${encodedCategory}`;
    const params = {};
    const response = await fetch(url, params);

    var jsonBody =  await response.text();
    this.setState({
                    hits: JSON.parse(jsonBody)
                  })
  };

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.text();
    console.log("Response: ", body);

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <p className="App-intro">
          Boosted search
        </p>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          Boost category:
          <input
            placeholder="dokumentar"
            ref={input => this.category = input}
            onChange={this.handleInputChange}
          />
          {/*<p>{this.state.query}</p>*/}
          <SearchResult hits={this.state.hits}/>
        </form>
      </div>
    )
  }
}

export default Search