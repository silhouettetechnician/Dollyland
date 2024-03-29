import React from 'react'

const Backdrop = ( props ) => (
    props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
)
 
export default Backdrop;