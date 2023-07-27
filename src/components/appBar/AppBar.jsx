import { AuthNav } from 'components/authNav/AuthNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

export const AppBar = () => {

  const selectIsLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <header className={css.header}>
      <Navigation />
      {selectIsLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
