import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';
import logoimg from "../images/logo1.png"
const Header = () => {
  return (
   <MainHeader>
        <NavLink to="/">
            <img src="https://dongphucvina.vn/wp-content/uploads/2023/06/logo-thu-do-ha-noi-dongphucvina.vn_.png" alt ="my logo img " />

        </NavLink>
        <Nav/>

   </MainHeader>
  )
}
  const MainHeader = styled.header`
    height: 10rem;
    background-color: rgba(81, 56, 238, 0.4);
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
 
    img {
      height: 8rem; // Adjust this value to decrease the size of the logo
  }

  `;


export default Header;