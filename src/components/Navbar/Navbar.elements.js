import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components'
import {SiNintendogamecube} from 'react-icons/si'
import {Container } from '../../globalStyles'

export const Nav = styled.nav`
    background: #15034A;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        transition:  0.8s all ease;
    }
`;

// export const NavbarConatiner = styled.div`
    
//     height: 80px;
//     display: flex;
//     justify-content: space-between;
//     z-index: 1;
//     width: 100%auto;
//     padding: 0 24px;
//     max-width: 1100px;
// `;

export const NavbarConatiner = styled(Container)`
    
    height: 80px;
    display: flex;
    justify-content: space-between;
    
    ${Container}
`;

export const NavLogo = styled(LinkR)`
    color: #EEF4F9;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration :none;
    font-size: 2rem;
    display: flex;
    align-items:center;
    margin-left:24px;
    font-weight: bold;

`;

export const NavIcon = styled(SiNintendogamecube)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 960px) {
        display: block;
        positions: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition:  all 0.5s ease;
        background: #15034A;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        
        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(LinkR)`
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #15034A;
    }

    @media screen and (max-width :960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }

    }
`;

// export const NavBtn = styled.nav`
//     display:flex;
//     align-items: center;

//     @media screen and (max-width: 960px){
//         display: none;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         height: 120px;
//     }

// `;

export const NavItemBtn = styled.li`
    display:flex;
    align-items: center;
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    display:flex;
    justify-content: center;
    align-items:center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline:none;
    cursor: pointer;
`;