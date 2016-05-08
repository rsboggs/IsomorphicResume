import React from 'react';
import { reduxForm } from 'redux-form';

class Signup extends React.Component {
  render() {
    const { fields: { firstName, lastName, email }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input type="text" placeholder="Email" {...email}/>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['firstName', 'lastName', 'email']
})(Signup);
