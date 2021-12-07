import PropTypes from 'prop-types';
import { Header, StyledIcon, Title } from './Styles';

export const HeaderTitle = ({ icon, title }) => {
  return (
    <Header>
      <StyledIcon>{icon}</StyledIcon>
      <Title>{title}</Title>
    </Header>
  )
};

HeaderTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
};

