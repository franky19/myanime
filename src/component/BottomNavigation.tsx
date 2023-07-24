// src/components/BottomNavigation.tsx

import React from 'react';
import { AboutIconStyled, BottomNavContainer, CollectionIconStyled, HomeStyled, IconStyled, NavLink, NavLinkItem, NavLinks} from "../styles/BottomNavigation.styles";

const BottomNavigation: React.FC = () => {
  return (
    <BottomNavContainer>
      <NavLinks>
        <NavLinkItem>
          <NavLink href='/'>
              <IconStyled><HomeStyled /></IconStyled>
              <IconStyled>Home</IconStyled>
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
        <NavLink href='/collection'>
              <IconStyled><CollectionIconStyled /></IconStyled>
              <IconStyled>Collections</IconStyled>
        </NavLink>
        </NavLinkItem>
        <NavLinkItem>
        <NavLink href='/about'>
              <IconStyled><AboutIconStyled /></IconStyled>
              <IconStyled>About</IconStyled>
        </NavLink> 
        </NavLinkItem>
        {/* 
       */}
      </NavLinks>
    </BottomNavContainer>
  );
};

export default BottomNavigation;
