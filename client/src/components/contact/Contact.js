import React, { Component } from 'react';
import axios from 'axios';
import { Formik } from 'formik';

import ContactForm from './ContactForm';

import validation from './utils/getValidationSchema';

class Contact extends Component {
  state = {
    initialValues: {
      name: '',
      email: '',
      message: ''
    }
  };

  handleSubmit = (
    values,
    { setErrors, setStatus, setSubmitting, resetForm }
  ) => {
    axios
      .post('/send', {
        name: values.name,
        email: values.email,
        message: values.message
      })
      .then(res => {
        if (res.status) {
          setSubmitting(false);
          setStatus({ success: true });
          resetForm();
        }
      })
      .catch(err => {
        if (err) {
          console.log(err);
          setSubmitting(false);
          setStatus({ success: false }); //
          setErrors({ submit: err.message });
        }
      });
  };

  render() {
    return (
      <div className="contact wrapper">
        <h2 className="contact__heading heading">Get in Touch</h2>
        <div className="contact__rectangle heading__rectangle" />

        <Formik
          initialValues={this.state.initialValues}
          validationSchema={validation}
          onSubmit={this.handleSubmit}
          render={props => <ContactForm {...props} />}
        />
      </div>
    );
  }
}

export default Contact;
