import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';


class Row extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired
  };

  render() {
    const { firstName, lastName, email, phoneNumber, dateOfBirth, id } = this.props;

    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{dateOfBirth}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
        <td>
          <Button bsStyle="primary" bsSize="xs" onClick={
            () => this.props.editContact({ firstName, lastName, email, phoneNumber, dateOfBirth, id })}
          >
            <Glyphicon glyph="edit" />
          </Button>
          &nbsp;
          <Button bsStyle="danger" bsSize="xs" onClick={() => this.props.deleteContact(id)}>
            <Glyphicon glyph="trash" />
          </Button>
        </td>
      </tr>
    );
  }
}

export default Row;