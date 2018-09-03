const showPopup = () => {
    return {
        type: 'OPEN_POPUP',
        payload: {
            isOpen: true
        }
    }
}
const closePopup = () => {
    return {
        type: 'CLOSE_POPUP',
        payload: {
            isOpen: false
        }
    }
}
export {showPopup, closePopup}