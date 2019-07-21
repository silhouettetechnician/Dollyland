import React from 'react'
import NavigationItems from './NavigationItems'
import SidedrawToggle from '../sideDrawer/SideDrawerToggle'

const Toolbar = ( props ) => {
    return ( 
        <header className='Toolbar'>
                <SidedrawToggle clicked={props.drawClicked} />
   
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default Toolbar;