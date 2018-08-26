import React from 'react'

const Image = (props) => (

        <div>
            <div>
                <div className>{props.title}</div>
            </div>
                <img src={props.url}/>
        </div>
)
            

export default Image