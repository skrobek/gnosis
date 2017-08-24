import { remove } from 'lodash';

import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './../actions/contacts';

import generateData from './../lib/dataGenerator';

// generate some fake data
const initialState = {
  list: generateData()
};

// in case of more than one reducer we can use combineReducers from redux package
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        list: [...state.list, action.data],
      }
    case DELETE_CONTACT:
      return {
        ...state,
        list: remove(state.list, item => item.id !== action.id)
      }
    case EDIT_CONTACT:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.id) {
            return action.data;
          }

          return item;
        })
      };
    default:
      return state;
  }
}