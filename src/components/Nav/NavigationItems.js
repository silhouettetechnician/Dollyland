import React from 'react'
import NavigationItem from './NavigationItem'


const NavigationItems = ( props ) => {
    return ( 
        <ul className='NavigationItems'>
        <NavigationItem link='/products'>Shop</NavigationItem>
        <NavigationItem link='/about'> About</NavigationItem>
        <NavigationItem link='/login'>Account</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
        </ul>
     );
}
 
export default NavigationItems;