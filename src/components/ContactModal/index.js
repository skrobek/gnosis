import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types';
import faker from 'faker';

import ContactForm from './../ContactForm';


class ContactModal extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    editItem: PropTypes.object
  }

  handleSubmit = (data) => {
    if (this.props.editItem) {
      this.props.editContact(this.props.editItem.id, data);
    } else {
      this.props.addContact({ id: faker.random.uuid(), ...data});
    }

    this.props.closeModal();
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            onSubmit={this.handleSubmit}
            initialValues={this.props.editItem}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ContactModal;