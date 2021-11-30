import React from 'react';

const Search = ({ action, value }) => {
    return (
        <div>
            filter shown with <input onChange={action} value={value} />
      </div>
    );
}

export default Search;
