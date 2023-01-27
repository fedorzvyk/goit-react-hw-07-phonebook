import { Button } from 'commonStyles/coommonStyles.styled';
import { Item, ItemName } from './ContactListItem.styled';
import { FaPhoneAlt, FaUserAlt, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/operations';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, phone, name }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <ItemName>
        <FaUserAlt fill="orange" /> {name}:
      </ItemName>
      <span>
        <FaPhoneAlt fill="orange" /> {phone}
      </span>
      <Button type="button" onClick={() => dispatch(deleteTask(id))}>
        <FaTrash /> Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
