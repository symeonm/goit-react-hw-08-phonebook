import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';

export function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  // console.log(isLoading);
  // console.log(error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
