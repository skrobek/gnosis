import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Table } from 'react-bootstrap';
import { Glyphicon, Button } from 'react-bootstrap';
import { orderBy } from 'lodash';

import Row from './row';
import ContactModal from './../ContactModal';

import './ListView.css';


class ListView extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired
    })),
  };

  constructor() {
    super();

    this.state = {
      sortBy: 'firstName',
      order: 'asc',
      showModal: false,
      editItem: null
    }
  }

  handleSort = (sortBy) => {
    if (this.state.sortBy === sortBy) {
      const order = this.state.order === 'asc' ? 'desc' : 'asc';
      this.setState({ order })
    } else {
      this.setState({ sortBy });
    }
  }

  handleEdit = (editItem) => {
    this.setState({ editItem, showModal: true });
  }

  renderSortIcon() {
    const { order } = this.state;
    return <Glyphicon glyph={order === 'asc' ? 'chevron-down' : 'chevron-up'} />
  }

  renderColumnHeader = (name, label) => (
    <th onClick={() => this.handleSort(name)}>
      {this.state.sortBy === name && this.renderSortIcon()}{label}
    </th>
  )

  render() {
    const { list, deleteContact } = this.props;
    const { sortBy, order, showModal } = this.state;
    const sortedList = orderBy(list, [sortBy], [order]);

    return (
      <div className="page">
        <PageHeader className="text-center">
          Gnosis Frontend - React/Redux Task
        </PageHeader>
        <Button bsStyle="success" className="add-btn" onClick={() => this.setState({ showModal: true })}>
          <Glyphicon glyph="plus" /> Add Contact
        </Button>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              {this.renderColumnHeader('firstName', 'First Name')}
              {this.renderColumnHeader('lastName', 'Last Name')}
              {this.renderColumnHeader('dateOfBirth', 'Date of Birth')}
              {this.renderColumnHeader('phoneNumber', 'Phone Number')}
              {this.renderColumnHeader('email', 'Email')}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map(item =>
              <Row
                key={item.id} {...item}
                deleteContact={deleteContact}
                editContact={this.handleEdit}
              />
            )}
          </tbody>
        </Table>
        <ContactModal
          showModal={showModal}
          closeModal={() => this.setState({ showModal: false })}
          addContact={this.props.addContact}
          editContact={this.props.editContact}
          editItem={this.state.editItem}
        />
      </div>
    );
  }
}

export default ListView;