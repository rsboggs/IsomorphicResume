import React from 'react';

class Signup extends React.Component {
  render() {
    const { fields: { email, password, password_confirmation }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>

        {/* Email */}
        <div>
          <label>Email</label>
          <input type="text" placeholder="Email" {...email}/>
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="text" placeholder="Password" {...password}/>
        </div>

        {/* Password Confirmation */}
        <div>
          <label>Password Confirmation</label>
          <input type="text" placeholder="Password Confirmation" {...password_confirmation}/>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Signup;
