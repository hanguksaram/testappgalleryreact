import React from 'react';
import Image from './image'

const ImageGallery = (props) => {
    
    const renderImages = () => {
               return props.images.map((img) => {
                     return <Image key={img.id} {...img}/>
                 })
             }
    return (    
            <div>
                {!!props.images && renderImages()}
            </div>    
                    
            )
}

export default ImageGallery;