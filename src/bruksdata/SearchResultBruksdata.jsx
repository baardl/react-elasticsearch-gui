import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import SearchResultRowBruksdata from "./SearchResultRowBruksdata";

const SearchResult = ({hits}) => {
  if (hits) {
    return (
      <div>

        <Container>
          <Row>
            <Col xs={12}>
              <h3>Search results</h3>
            </Col>
          </Row>
          <ul className="Search-results">

            {hits.map((hit, i) =>
                        <SearchResultRowBruksdata key={i} hit={hit} />
            )}
          </ul>
        </Container>
      </div>
    )} else {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12}>
              <h3>No results</h3>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
};

SearchResultRowBruksdata.propTypes = {
  hits: PropTypes.object.isRequired
};

export default SearchResult;