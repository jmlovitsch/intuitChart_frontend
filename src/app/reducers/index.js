import { combineReducers } from 'redux'
import { assessment } from './assessment'
import {auth} from './auth'
import {user} from './user'
import {vitals} from './vitals'
import {employee} from './employee'
import { drugs } from './drug'

export default combineReducers({
  user,
  vitals,
  auth,
  assessment,
  employee,
  drugs,

})
