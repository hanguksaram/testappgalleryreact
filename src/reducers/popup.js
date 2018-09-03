const defaultState = {isOpen: false}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'OPEN_POPUP': 
            return {...state, ...action.payload}
        case 'CLOSE_POPUP':
            return {...state, ...action.payload}
        default :
            return state
    }
}