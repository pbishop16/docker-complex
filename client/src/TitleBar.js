import React from 'react';
import PropTypes from 'prop-types';

export const TitleBar = ({
  title,
}) => (
  <header
    style={{
      fontSize: '1.2rem',
      padding: '10px 0',
      width: '100%',
      textAlign: 'center',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
    }}
  >
    {title}
  </header>
);

TitleBar.propTypes = {
  title: PropTypes.string,
};

export default TitleBar;
