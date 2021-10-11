import styled from 'styled-components';

const FlexBox = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const StyledListItem = styled.li`
    padding: 0px 15px;
    font-size: 14px;
    letter-spacing: 0.05em;
    font-weight: bold;
    text-transform: uppercase;
    a {
      color: black;
      text-decoration: none;
      &:hover, &:focus, &:active {
        color: #5B35D5;
        text-decoration: none;
        
      }
    }
`;

export const StyledAlert = styled(FlexBox)`
  color: white;
  background-color: #120b2b;
  z-index: 100;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  * {
    padding: 10px 10px;
    font-size: 11px;
    margin: 0px 10px;
    font-weight: 600;
    color: white;
  }
  a {
    margin: 0px;
    padding: 0px;
  }
`;

export const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const StyledNav = styled(FlexBox)`
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #E1E2E3;
  position: relative;   
  max-height: 60px;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 28px;
  `;