import { StyledWraper, StyledBtn } from './Buttons.styled';
import PropTypes from 'prop-types';
export const Buttons = ({ buttons }) => {
  return (
    <StyledWraper>
      {buttons.map(button => {
        return (
          <StyledBtn key={button[0]} onClick={button[1]} name={button[0]}>
            {button[0]}
          </StyledBtn>
        );
      })}
    </StyledWraper>
  );
};
Buttons.propTypes = {
  buttons: PropTypes.array,
  onClick: PropTypes.func,
};
