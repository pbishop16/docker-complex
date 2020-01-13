import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

export const FibForm = () => {
  const [
    index,
    setIndex
  ] = useState('');
  const [
    disabled,
    setDisabled
  ] = useState(true);

  const handleSubmit = async () => {
    axios.post('/values', {
      index
    });

    setIndex('');
  };

  useEffect(() => {
    setDisabled(!index);
  }, [index]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '8px 0',
      }}
    >
      <div>Enter your index:</div>
      <input
        type='text'
        onChange={
          ({ target: { value } }) => {
            const isEmpty = value === '';
            const entry = isEmpty ? value : parseInt(value, 10);

            (isEmpty || !isNaN(entry)) && setIndex(entry);
          }
        }
        value={index}
      />
      <button disabled={disabled} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FibForm;
