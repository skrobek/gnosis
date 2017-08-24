import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import validateForm from './../../lib/validation';

import Input from './../Form/Input';


const validate = (values) => {
  const rules = {
    firstName: {
      presence: true
    },
    lastName: {
      presence: true
    },
    dateOfBirth: {
      presence: true
    },
    phoneNumber: {
      presence: true
    },
    email: {
      presence: true,
      email: true
    }
  };

  return validateForm(values, rules);
};


class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name="firstName"
          label="First Name"
          component={Input}
        />
        <Field
          name="lastName"
          label="Last Name"
          component={Input}
        />
        <Field
          name="dateOfBirth"
          label="Date of Birth"
          component={Input}
        />
        <Field
          name="phoneNumber"
          label="Phone Number"
          component={Input}
        />
        <Field
          name="email"
          label="Email"
          component={Input}
        />
        <div className="buttons-group">
          <Button type="submit" block bsStyle="success">
            Save Contact
          </Button>
        </div>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contactForm',
  validate
})(ContactForm)

export default ContactForm;
