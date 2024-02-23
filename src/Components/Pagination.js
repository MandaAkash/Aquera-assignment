// Pagination.js
import React from 'react';

const Pagination = ({ onNextPage }) => {
  return (
    <div className="pagination" style={{"padding":"20px"}}>
      <button onClick={onNextPage} style={{"padding":"10px","borderRadius":"10px","cursor":"pointer","backgroundColor":"yellow"}}>Next Page</button>
    </div>
  );
};

export default Pagination;
