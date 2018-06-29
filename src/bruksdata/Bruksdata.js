import React, {Component} from 'react'
import SearchResultBruksdata from "./SearchResultBruksdata";

class Search extends Component {
  state = {
    hits: [{"_source": {
        "user_id": "DQA780jMlebl/opf1mWC0et5VJU=",
        "interests":[
          {
            "category": "drama-serier",
            "count": 27
          },
          {
            "category": "livsstil",
            "count": 1
          }
        ],
        "categories":[
          "drama-serier",
          "livsstil"
        ]
      }}]
  };

  handleInputChange = async () => {
    const url = '/bruksdata?user_id=' + this.user_id.value;
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

  /*
  handleInputChange = () => {
    fetch('/query?q=' + this.search.value)
      .then(function (body) {
        this.setState({
                     query: body
                   })
    }, function (error) {
      console.error(error.message);
    });
  }
  */

  render() {
    return (
      <div>
        <p className="App-intro">
          Find user
        </p>
        <form>
          <input
            placeholder="user_id"
            ref={input => this.user_id = input}
            onChange={this.handleInputChange}
          />
          {/*<p>{this.state.query}</p>*/}
          <SearchResultBruksdata hits={this.state.hits}/>
        </form>
      </div>
    )
  }
}

export default Search