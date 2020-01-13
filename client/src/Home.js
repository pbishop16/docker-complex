import React, {
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import CalculatedValues from './CalculatedValues';
import FibForm from './FibForm';
import SeenIndicies from './SeenIndicies';

export const Home = ({
  data,
}) => (
  <Fragment>
    <TitleBar title='Fib Calculator' />
    <FibForm />
    <SeenIndicies data={data} />
    <CalculatedValues data={data} />
  </Fragment>
);

Home.propTypes = {
  data: PropTypes.array,
};

Home.defaultProps = {
  data: [],
};

export default Home;
