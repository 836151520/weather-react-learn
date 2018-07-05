import {createStore} from 'redux'

function counter(state = {
    location: {
        city: '北京',
        province: '北京',
        leader: '北京'
    }
}, action) {
    switch (action.type) {
        case 'changeLocation':
            Object.assign(state.location, action.location)
            return state
        default :
            return state
    }
}

let store = createStore(counter)

export default store