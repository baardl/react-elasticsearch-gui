import React, {Component} from 'react'
import elasticsearch from 'elasticsearch';

class Search extends Component {
  state = {
    query: '',
  };


  handleInputChange = () => {
    this.client.search({
                    q: this.search.value
                  }).then(function (body) {
      this.setState({
                     query: body.hits.hits
                   })
    }, function (error) {
      console.error(error.message);
    });
  }

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