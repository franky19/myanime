import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

export const NavTitle = styled.h1`
  margin: 0;
  ${() =>
    css`
      @media (max-width: 768px) {
       margin-left:auto;
       margin-right:auto;
      }
    `}
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  ${() =>
    css`
      @media (max-width: 768px) {
       display:none
      }
    `}
`;

export const NavLinkItem = styled.li`
  margin-right: 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
