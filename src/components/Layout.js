import React from 'react'
import Aux from '../HOC/Aux'
import Toolbar from './Nav/Toolbar'
import SideDrawer from './sideDrawer/SideDrawer';

class Layout extends React.Component{
    state = {
            showSideDrawer: true,
        }

        sideDrawerCloser = () => {
            this.setState({ showSideDrawer: false })
        }

        sideDrawerToggleHandler = () => {
            this.setState(( prevState ) => {
                return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
   
    render(){
    return ( 
        <Aux>
            <Toolbar drawClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.showSideDrawer} closed={this.sideDrawerCloser}/>

            <main>
                {this.props.children}
            </main>
        </Aux>
     )
    }
}
 
export default Layout;