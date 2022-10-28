import { Btn } from './Button.styled';
import { PropTypes } from 'prop-types';

export const Button = ({ text, addContact }) => (
  <Btn
    onClick={() => {
      addContact();
    }}
  >
    {text}
  </Btn>
);

Button.propTypes = {
  text: PropTypes.PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
};
