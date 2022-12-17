import { combineReducers, createStore } from 'redux'
import STUDENTS from './reducers/student';
import TEACHER from './reducers/teacher';
import SCHOOLS from './reducers/school'
import ViewBox from './reducers/schoolboxs'

const store = createStore(combineReducers({ STUDENTS, TEACHER, SCHOOLS ,ViewBox}))
export default store;