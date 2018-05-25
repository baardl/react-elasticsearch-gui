import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'reactstrap';

const SearchResultRow = ({hit}) => {
  return (
    <Row>
      <Col xs="3">{hit._source.title}</Col>
      <Col xs="9">
        {hit._source.categories.map((category, i) =>
                              <i>{category},</i>
        )}</Col>
    </Row>
  );
};

SearchResultRow.propTypes = {
  hit: PropTypes.object.isRequired
};

export default SearchResultRow;
// export default inject('routing')(observer(SearchResult))