import React from 'react';
import { 
    Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink
} from 'reactstrap';

const NavbarComp = (props)=> {
    // const {isOpen,SetIsOpen} = useState(false)
    // const toogle = () => SetIsOpen(!isOpen)
  return (
    <div>
        
        <Navbar color="light" expand="md" light >
            <NavbarBrand href="/">VR </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar >
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>

                    </Nav>
                    {/* <NavbarText> Simple Text</NavbarText> */}
                </Collapse>
        </Navbar>

        
    </div>
    )
}

export default NavbarComp;
