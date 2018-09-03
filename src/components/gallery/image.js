import React from 'react'
import { connect } from 'react-redux'
import { removeImage } from '../../actions/images'

const Image = (props) => (

    <div className="image__container">
        <div className="image__header">
            <div className="image__title">{props.title}</div>
            <button onClick={() => { props.removeImage(props.id) }}>Delete</button>
        </div>
        <img src={props.url}/>
        <div className="image__overlay">
        </div>
        <div className="image__overlay__btn">
            <button onClick={() => { props.removeImage(props.id) }}>Delete</button>
        </div>
     </div>
)
            

const mapDispatchToProps = (dispatch) => {
    return {
        removeImage: (id) => {dispatch(removeImage(id))}
    }
}
export default connect(null, mapDispatchToProps)(Image);