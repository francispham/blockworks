import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;

    font-weight: 700;
    border: 1px solid #5b35d5;
    border-radius: 5px;
    padding: 15px;
    text-transform: uppercase;
    transition: background-color 0.2s ease;
    background: #5b35d5;
    width: 170px;
    &:hover {
        background: #5b35d5;
        color: white;
    }
`;  

function Button(props) {
  const { children, onClick, disabled } = props;
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
