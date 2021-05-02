import React, { Component } from 'react';
import { connect } from 'kea';
import form from './form';
import './styles.scss';

@connect({
  actions: [form, ['setValue', 'submit']],
  values: [form, ['values', 'isSubmitting', 'errors']],
})
export default class CreatedForm extends Component {
  render() {
    const { isSubmitting, errors, values } = this.props;
    const { submit, setValue } = this.actions;
    const { name, email, message } = values;

    return (
      <div
        style={{
          height: 'calc(100vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setValue('name', e.target.value)}
          />
          {errors.name ? <div className="form-error">{errors.name}</div> : null}
        </div>

        <div className="form-field">
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setValue('email', e.target.value)}
          />
          {errors.email ? (
            <div className="form-error">{errors.email}</div>
          ) : null}
        </div>

        <div className="form-field">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setValue('message', e.target.value)}
          />
          {errors.message ? (
            <div className="form-error">{errors.message}</div>
          ) : null}
        </div>

        <div className="form-field">
          <div className="button-container">
            <button disabled={isSubmitting} onClick={submit}>
              {isSubmitting ? 'Submitting...' : 'Submit!'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
