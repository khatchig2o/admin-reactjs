import { combineReducers, createStore } from 'redux'
import STUDENTS from './reducers/student';
import TEACHER from './reducers/teacher';
import SCHOOLS from './reducers/school'

const store = createStore(combineReducers({STUDENTS,TEACHER,SCHOOLS}))
export default store;