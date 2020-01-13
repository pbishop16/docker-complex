import React from 'react';
import PropTypes from 'prop-types';

export const ValueRow = ({
  calculatedValue,
  index,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      fontSize: '0.8rem',
      width: '100%'
    }}
  >
    <div style={{ flex: '1 1 33%' }}>
      For index { index }
    </div>
    <div style={{ flex: '1 1 33%' }}>|</div>
    <div style={{ flex: '1 1 33%' }}>
      calculated { calculatedValue }
    </div>
  </div>
);

ValueRow.propTypes = {
  calculatedValue: PropTypes.number,
  index: PropTypes.string,
};

export const CalculatedValues = ({
  data
}) => {
  return (
    <div
      style={{
        fontSize: '1rem',
        lineHeight: '1rem',
        overflow: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '400px',
        margin: '8px 0',
      }}
    >
      <div
        style={{
          fontWeight: '700',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Calculated Values:
      </div>
      <div
        style={{
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {
          data.length > 0
            ? data.map(({value, index}) => (
              <ValueRow index={index} calculatedValue={value} />
            ))
            : <div style={{ fontSize: '0.8rem' }}>No Calculated Values</div>
        }
      </div>
    </div>
  );
};

CalculatedValues.propTypes = {
  data: PropTypes.array,
};

CalculatedValues.defaultProps = {
  data: [],
};

export default CalculatedValues;
