import React, {Component} from 'react'
import SearchResult from "./SearchResult";

class PersonalizedSearch extends Component {
  state = {
    hits: [{"_source": {"title": "-empty-", "categories":["livsstil","natur","NRK-arkivet"]}}],
  };


  handleInputChange = async () => {
    const encodedQuery = encodeURIComponent(this.search.value);
    const encodedUserId = encodeURIComponent(this.userid.value);
    const url = `/query/personalized?q=${encodedQuery}&user_id=${encodedUserId}`;
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
          Personalized search
        </p>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          User id:
          <input
            placeholder="Userid ..."
            ref={input => this.userid = input}
            onChange={this.handleInputChange}
          />DQA780jMlebl/opf1mWC0et5VJU=
          {/*<p>{this.state.query}</p>*/}
          <SearchResult hits={this.state.hits}/>
        </form>
      </div>
    )
  }
}

export default PersonalizedSearch