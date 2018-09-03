import { combineReducers } from 'redux'
import images from './images'
import popup from './popup'

const rootReducer = combineReducers({
    images,
    popup
})

export default rootReducer