import { AuthNav } from 'components/authNav/AuthNav';
import { Navigation } from 'components/navigation/Navigation';
import css from './AppBar.module.css';


export const AppBar = () => {
    // const { isLoggedIn } = useAuth();
  
    return (
      <header className={css.header}>
        <Navigation/>
        <AuthNav/>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
    );
  };