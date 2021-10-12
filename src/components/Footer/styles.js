import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 70px 0px;
  background-color: #120B2B;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 40px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-right: 18px;
  column-count: 2;
`;

export const StyledListItem = styled.li`
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  a {
    color: white;
    text-decoration: none;
    &:hover, &:focus, &:active {
      color: #5B35D5;
      text-decoration: none;
      
    }
  }
`;

export const StyledGridBox = styled.div`
  max-width: none;
  width: 95%;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1375px;
`;

export const StyledInnerBox = styled.div`
  max-width: none;
  width: 25%;
  box-sizing: border-box;
  padding: 0 1em;
  flex-wrap: wrap;
  max-width: 1375px;
`;

export const StyledFooterCopy = styled.div`
  letter-spacing: 0.06em;
  font-size: 10px;
  margin-top: 60px;
`;

export const StyledSocialBox = styled.div`
  width: 25%;
  justify-content: space-between;
  display: flex;
  margin-top: 20px;
`;

export const StyledSubscribeBox = styled.div`
  width: 33.3%;
  div {
    margin-top: 25px;
  }
`;

export const StyledLogoBox = styled.div`
  width: 16.6%;
  text-align: left;
`;

export const StyledButton = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  border: 1px solid #5b35d5;
  border-radius: 5px;
  padding: 15px 36px;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  background: #5b35d5;
  &:hover {
    background: #33247b;
    border-color: #33247b;
    color: white;
  }
`;  

export const StyledImage = styled.img`
  width: 28px;
  margin-bottom: 20px;
`;