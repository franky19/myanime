import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {FaHome} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {MdCollections} from 'react-icons/md'

export const BottomNavContainer = styled.nav`
${() =>
  css`
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      background-color: #333;
      color: #fff;
      padding: 10px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `}
 
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavLinkItem = styled.li`
  padding:20px
  // margin-right: 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HomeStyled = styled(FaHome)`
  font-size:20px;
  text-align:center
`

export const IconStyled = styled.div`
text-align:center
`

export const AboutIconStyled=styled(HiUserGroup)`
font-size:20px;
text-align:center
`

export const CollectionIconStyled=styled(MdCollections)`
font-size:20px;
text-align:center
`

// export const IconStyled = css({
//   textAlign:'center'
// })
// export const IconStyled = styled()