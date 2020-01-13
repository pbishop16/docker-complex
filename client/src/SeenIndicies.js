import React from 'react';
import PropTypes from 'prop-types';

export const SeenIndicies = ({
  data,
}) => {
  const indicies = data.map(({index}) => index).sort();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        margin: '8px 0',
      }}
    >
      <div style={{ fontWeight: 700 }}>Indicies I have seen:</div>
      <div>{indicies.join(', ')}</div>
    </div>
  );
};

SeenIndicies.propTypes = {
  data: PropTypes.array
};

SeenIndicies.defaultProps = {
  data: [],
};

export default SeenIndicies;
