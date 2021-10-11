import styled from 'styled-components';

export const StyledCloseNav = styled.div`
  cursor: pointer;
  display: flex;
  span {
    margin-right: 8px;
  }
  div {
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
  
export const ToggleButton = styled.div`
  border-right: 1px solid #E1E2E3;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: icons;
  font-weight: 300;
  `;

export const StyledSideBar = styled.div`
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 90%;
  left: ${props => props.isOpen ? '0px' : '-90%'};
  max-width: 500px;
  padding: 25px;
  background-color: white;
  box-shadow: 8px 0px 14px #0000001f;
  z-index: 100;
  transition: all 0.6s ease;
  `;