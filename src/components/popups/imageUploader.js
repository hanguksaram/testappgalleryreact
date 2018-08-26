import React, { Component } from 'react';
import { closePopup } from '../../actions/popup'
import { addImage } from '../../actions/images'
import { connect } from 'react-redux'

class ImageUploader extends Component {
       
    render() {
        return (
            <div>
                Hello from imgUpl
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        galleryLength: state.images.length
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        closePopup: () => (dispatch(closePopup())),
        addImage: (image) => (dispatch(addImage(image)))

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);