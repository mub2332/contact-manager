import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          name: 'Name is required'
        }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          phone: 'Phone is required'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          email: 'Email is required'
        }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await Axios.post(
      'https://jsonplaceholder.typicode.com/users/',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    this.setState({
      name: '',
      email: '',
      phone: ''
    });

    this.props.history.push('/');
  };

  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onFormSubmit(dispatch, e)}>
                  <TextInputGroup
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={this.onInputChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onInputChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    type="text"
                    label="Phone"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={this.onInputChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
