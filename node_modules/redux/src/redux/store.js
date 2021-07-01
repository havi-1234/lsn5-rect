import react from 'react-redux'
import { createStore, combineReducers } from 'redux'
import pupils from './reducers/pupils'
 
const reducer=pupils
// const reducer = combineReducers({pupils})
const store = createStore(reducer)
window.store = store
export default store