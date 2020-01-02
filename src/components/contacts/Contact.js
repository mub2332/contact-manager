import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import Axios from 'axios';

export class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }));
  };

  onDeleteClick = async (id, dispatch) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  onClick={() => this.onDeleteClick(id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                ></i>
                <Link to={`contacts/edit/${id}`}>
                  <i 
                    className="fas fa-pencil-alt" 
                    style={{ 
                      cursor: 'pointer', 
                      float: 'right', 
                      color: 'black', 
                      marginRight: '1rem' }}>
                  </i>
                </Link>
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
