import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import contacts from './contacts';

const rootReducer = combineReducers({
  form: formReducer,
  contacts
})

export default rootReducer;