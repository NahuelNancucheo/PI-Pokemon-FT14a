import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const NavBar = styled.nav`
   background: #D54F4C;
   border: 1px solid #434141;
   height: 60px;
   display:flex;
   justify-content: space-between;
   padding: 0.5rem calc((100vw - 1215px) /2);
   z-index: 10; 
`

export const NavLink = styled(Link)`
    color: #000;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0rem 1rem;
    height:100%;
    cursor:pointer;

    &.active {
        color: 	#ffc94b;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color:#fff;
    height:100px;
    width:30px;

    @media screen and (max-width: 768px) {
        display:block;
        position:absolute;
        top:0;
        right:15px;
        transform: translate(-100%, 75%)
        font-size: 1.8rem;
        cursor:pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right:24px;

    @media screen and (max-width: 760px) {
        display:none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width: 760px) {
        display:none;
    }
`

export const NavBtnLink =styled(Link)`
    border-radius:4px;
    background:#256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    margin-left:24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

