import React from 'react'
import { connect } from 'react-redux'
import { removeImage } from '../../actions/images'

const Image = (props) => (

        <div>
            <div>
                <div className>{props.title}</div>
            </div>
                <img src={props.url}/>
        </div>
)
            

const mapDispatchToProps = (dispatch) => {
    return {
        removeImage: (id) => {dispatch(removeImage(id))}
    }
}
export default connect(null, mapDispatchToProps)(Image);