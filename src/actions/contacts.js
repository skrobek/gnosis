export const ADD_CONTACT = 'app/contact/ADD_CONTACT';
export const DELETE_CONTACT = 'app/contact/DELETE_CONTACT';
export const EDIT_CONTACT = 'app/contact/EDIT_CONTACT';


export function addContact(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      data
    });
  }
}

export function deleteContact(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      id
    });
  }
}

export function editContact(id, data) {
  return (dispatch) => {
    dispatch({
      type: EDIT_CONTACT,
      id,
      data
    });
  }
}