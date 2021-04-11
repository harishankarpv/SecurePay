import React, {useState, useEffect} from 'react' 
import { FaBars, FaTimes } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
// import { NavLink } from 'react-router-dom'
import { Button } from '../../globalStyles'
import {
     Nav, NavbarConatiner ,NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem,
     NavItemBtn, NavBtnLink
    } from './Navbar.elements'



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: "#5C23DB"}}>
                <Nav>
                    <NavbarConatiner>
                    <NavLogo to="/" onClick={handleClick} click={click}>
                        <NavIcon />
                        SecurePay
                    </NavLogo>
                    <MobileIcon onClick={handleClick}> 
                    {click ? <FaTimes /> : <FaBars /> } 
                    </MobileIcon>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='/services'>SERVICES</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='/products'>Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/buy'>Buy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/wallet'>Wallet</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/defi'>DeFi</NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>Sign Up</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button  fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>

                    </NavMenu>

                    </NavbarConatiner>
                </Nav>
            </IconContext.Provider>         
        </>
    )
}

export default Navbar
