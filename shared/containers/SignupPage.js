import React from 'react';
import { reduxForm } from 'redux-form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Signup from '../components/Signup';

const SignupForm = reduxForm({
  form: 'login',
  fields: ['email', 'password', 'password_confirmation']
})(Signup);

class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default SignupPage;
