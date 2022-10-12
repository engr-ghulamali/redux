import {combineReducers} from 'redux'
import cardItems from './reducer'
console.log('service/reducers/index');
export default combineReducers({
    cardItems,
})