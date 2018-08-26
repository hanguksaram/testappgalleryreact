import React from 'react';
import Image from './image'
import { showPopup } from '../../actions/popup'
import { connect } from 'react-redux'

const ImageGallery = (props) => {
    console.log(props)
    const renderImages = () => {
               return props.images.map((img) => {
                     return <Image key={img.id} {...img}/>
                 })
             }
    return (    
            <div>
                kek
                {!!props.images && renderImages()}
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