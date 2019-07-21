import React from 'react'
import Aux from '../../HOC/Aux'
import Backdrop from '../UI/Backdrop';
import NavigationItems from '../Nav/NavigationItems'

const SideDrawer = ( props ) => {
    // let assignedClasses = ['.SideDrawer', '.Close']
    // if(props.open) {
    //     assignedClasses = ['.SideDrawer', '.Open']
    // }
    return ( 
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
                <div className={props.open ? 'Sidedrawer' + 'Open' : 'SideDrawer' + 'Close'}>
                    <div className='Logo'>
                    </div>
                        <nav>
                            <NavigationItems />
                        </nav>
                </div>
        </Aux>
     );
}
 
export default SideDrawer;