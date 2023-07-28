import { Layout } from 'components/layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import ContactPage from 'pages/ContactPage';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import Register from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/operation';
// import { fetchContacts } from 'redux/operation';
// import ContactForm from '../contact-form/ContactForm';
// import ContactList from '../contact-list/ContactList';
// import Filter from '../filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);

  // console.log(isLoading);
  // console.log(error);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
  // <div>
  //   {isLoading && !error && <b>Request in progress...</b>}
  //   <h1>Phonebook</h1>
  //   <ContactForm />
  //   <h2>Contacts</h2>
  //   <Filter />
  //   <ContactList />
  // </div>
}
