import React , { Component } from 'react';
import { Navbar , NavbarBrand  } from 'reactstrap';

class Header extends Component {

    render(){
        return(
            <div> 
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/" className="ml-5"> Food Strore </NavbarBrand> 
            </Navbar>

            </div>
        )
    }
}


export default Header;