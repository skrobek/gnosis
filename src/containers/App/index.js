import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { addContact, editContact, deleteContact } from './../../actions/contacts';

import ListView from './../../components/ListView';

class App extends Component {
  render() {
    return (
      <ListView {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  list: state.contacts.list
});

export default connect(
  mapStateToProps,
  {
    addContact,
    editContact,
    deleteContact
  }
)(App);