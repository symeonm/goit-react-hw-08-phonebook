import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
const user = useSelector(state => state.auth.user.name)

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user}</p>
      <button type="button" 
      onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};