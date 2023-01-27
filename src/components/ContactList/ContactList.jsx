import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);
  console.log(contacts);

  console.log(filterName);

  const visibleContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase().trim())
  );

  return (
    <List>
      {visibleContacts.map(({ id, phone, name }) => (
        <ContactListItem key={id} id={id} phone={phone} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
