import { combineReducers } from 'redux'
import { assessment } from './assessment'
import {auth} from './auth'
import {user} from './user'
import {vitals} from './vitals'
import {employee} from './employee'
import { drugs } from './drug'
import { patients } from './patients'
import { admissions } from './admissions'
import { assignments } from './assignments'
import { careplans } from './careplans'

export default combineReducers({
  user,
  vitals,
  auth,
  assessment,
  employee,
  drugs,
  patients,
  admissions,
  assignments,
  careplans


})
