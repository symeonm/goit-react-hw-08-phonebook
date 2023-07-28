import { RegisterForm } from 'components/registerForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm/>
      </div>
    );
  }