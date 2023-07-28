import ContactForm from 'components/contact-form';
import ContactList from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';

export default function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);  

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
       <ContactList />
    </div>
  );
}
