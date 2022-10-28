import { Label, Input } from './ContactForm.styled';
import { Box } from '../Box/Box';
import { Button } from './Button/Button';
import { PropTypes } from 'prop-types';

export const InputField = ({
  valueName,
  valueNumber,
  handleChange,
  addContact,
}) => {
  return (
    <Box
      width="400px"
      display="flex"
      flexDirection="column"
      ml="auto"
      mr="auto"
      justifyContent="center"
      alignItems="center"
      border="normal"
      p={3}
    >
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={valueName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={valueNumber}
          onChange={handleChange}
        ></Input>
      </Label>
      <Button
        type="button"
        text="Add contact"
        disabled={'on'}
        addContact={addContact}
      ></Button>
    </Box>
  );
};

InputField.propTypes = {
  valueName: PropTypes.PropTypes.string.isRequired,
  valueNumber: PropTypes.PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
