import { Navigation } from 'components/navigation/Navigation';
import css from './AppBar.module.css';


export const AppBar = () => {
    // const { isLoggedIn } = useAuth();
  
    return (
      <header className={css.header}>
        <Navigation/>
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
    );
  };