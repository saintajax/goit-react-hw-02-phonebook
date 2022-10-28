import { List, Item, Text, Link, Btn } from './ContactsList.styled';
import { PropTypes } from 'prop-types';

export const ContactsList = ({ contacts, del }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          {name}: <Link href={`tel:${number}`}>{number}</Link>
        </Text>
        <Btn
          onClick={() => {
            del(id);
          }}
        ></Btn>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  del: PropTypes.func.isRequired,
};
