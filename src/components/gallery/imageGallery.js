import React from 'react';
import Image from './image'
import { showPopup } from '../../actions/popup'
import { connect } from 'react-redux'

const ImageGallery = (props) => {
    const renderImages = () => {
               return props.images.map((img) => {
                     return <Image key={img.id} {...img}/>
            })
        }
    return (    
            <div className="gallery__wrapper">
                <button onClick={props.showPopup} className="gallery__addImageBtn">NEW</button>
                    <div className="gallery__container">
                        {!!props.images && renderImages()}
                    </div>
            </div>
            )
}

const mapStateToProps = (state) => 
(
    { images: state.images}
)
const mapDispatchToProps = (dispatch) => (
    {
        showPopup: () => {dispatch(showPopup())}
    } 
)



export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);