
const addImage = (image = {}) => {
    return {
        type: 'ADD_IMAGE',
        payload: image
    }
}

const removeImage = (id) => {
    return {
        type: 'REMOVE_IMAGE',
        payload: id
    }
}

export {addImage, removeImage}