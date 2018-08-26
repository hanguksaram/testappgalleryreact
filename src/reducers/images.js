const defaultState = [
    {title: 'foo', url: 'https://images7.alphacoders.com/411/thumb-1920-411820.jpg', id: 1},      
    {title: 'foo', url: 'https://images.alphacoders.com/159/thumb-1920-159471.jpg', id: 2}, 
    {title: 'foo', url: 'https://images7.alphacoders.com/339/thumb-1920-339136.jpg', id: 3}]

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_IMAGE' : 
            return [...state, action.payload]
        case 'REMOVE_IMAGE':
            return state.filter(elem => elem.id != action.payload)
        default:
            return state
    }
}