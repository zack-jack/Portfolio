import React from 'react';
import { Form, Field } from 'formik';

import sendIcon from '../../images/icon-send.svg';

const ContactForm = ({
  isSubmitting,
  errors,
  touched,
  handleChange,
  handleSubmit
}) => {
  const setButtonClass = () => {
    return Object.keys(errors).length !== 0
      ? 'contact-form__button button button--disabled'
      : 'contact-form__button button';
  };

  return (
    <Form className="contact-form">
      <div className="contact-form__top-row">
        <div className="contact-form__fieldset">
          <label className="contact-form__label">Name</label>
          <Field
            name="name"
            onChange={handleChange}
            className={
              errors.name && touched.name
                ? 'contact-form__field field field-error'
                : 'contact-form__field field'
            }
          />
          <div className="contact-form__error">
            {errors.name && touched.name ? errors.name : ''}
          </div>
        </div>

        <div className="contact-form__fieldset">
          <label className="contact-form__label">Email</label>
          <Field
            name="email"
            onChange={handleChange}
            className={
              errors.email && touched.email
                ? 'contact-form__field field field-error'
                : 'contact-form__field field'
            }
          />
          <div className="contact-form__error">
            {errors.email && touched.email ? errors.email : ''}
          </div>
        </div>
      </div>

      <div className="contact-form__fieldset">
        <label className="contact-form__label">Message</label>
        <Field
          name="message"
          onChange={handleChange}
          render={({ field }) => (
            <textarea
              {...field}
              rows="5"
              type="text"
              className={
                errors.message && touched.message
                  ? 'contact-form__text-area text-area field-error'
                  : 'contact-form__text-area text-area'
              }
            />
          )}
        />
        <div className="contact-form__error">
          {errors.message && touched.message ? errors.message : ''}
        </div>
      </div>

      <button type="submit" onClick={handleSubmit} className={setButtonClass()}>
        {isSubmitting ? (
          'Sending...'
        ) : (
          <div className="contact-form__button-content">
            Send Message
            <img
              src={sendIcon}
              alt="send icon"
              className="contact-form__send-icon"
            />
          </div>
        )}
      </button>
    </Form>
  );
};

export default ContactForm;
