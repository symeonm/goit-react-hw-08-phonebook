import { LoginForm } from 'components/loginForm/LoginForm';
import { Helmet } from 'react-helmet';


export default function Login() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm/> 
    </div>
  );
}