import React, {Component} from 'react'

class Search extends Component {
  state = {
    query: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ query: 'hei' }))
      .catch(err => console.log(err));
  };

  handleInputChange = async () => {
    const url = '/query?q=' + this.search.value;
    const params = {};
    const response = await fetch(url, params);

    var jsonBody =  await response.text();
    this.setState({
                    query: jsonBody
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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search