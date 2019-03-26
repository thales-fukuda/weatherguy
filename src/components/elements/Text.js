import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  margin-bottom: 5px;
  color: #ededed;
  font-weight: 300;
  font-size: ${props => props.fontSize};
`;

Text.propTypes = {
  fontSize: PropTypes.string,
};

Text.defaultProps = {
  fontSize: '22px',
};

export default Text;
