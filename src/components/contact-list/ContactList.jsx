import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operation';

const ContactList = () => {
  const contact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filtration = useSelector(state => state.filters);
  const deleteNumber = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = contact.filter(obj =>
    obj.name.toLowerCase().includes(filtration.toLowerCase())
  );

  return (
    <ul>
      {filterContact.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button
            id={id}
            onClick={() => {
              deleteNumber(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
