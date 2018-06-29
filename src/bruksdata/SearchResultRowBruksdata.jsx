import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'reactstrap';

const SearchResultRowBruksdata = ({hit}) => {
  return (
    <Row>
      <Col xs="5"><b>User:</b> {hit._source.user_id}</Col>
      <Col xs="4"><b>Categories:</b> {hit._source.categories.map((category, i) =>
                                                            <i> {category},</i>
      )}</Col>
      <Col xs="3"><b>Interests:</b> {hit._source.interests.map((interest, i) =>
                                                          <p><i> {interest.category}, {interest.count}</i></p>
      )}</Col>
    </Row>
  );
};

SearchResultRowBruksdata.propTypes = {
  hit: PropTypes.object.isRequired
};

export default SearchResultRowBruksdata;
// export default inject('routing')(observer(SearchResult))