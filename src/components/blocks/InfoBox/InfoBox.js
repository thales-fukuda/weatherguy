import styled from 'styled-components';
import PropTypes from 'prop-types';

// Elements
import Icon from '../../elements/Icon';
import Text from '../../elements/Text';
import Title from '../../elements/Title';

const InfoBox = styled.section`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.opacity}
`;

InfoBox.propTypes = {
  opacity: PropTypes.string,
};

InfoBox.defaultProps = {
  opacity: '1',
};

InfoBox.Icon = Icon;
InfoBox.Text = Text;
InfoBox.Title = Title;

export default InfoBox;
