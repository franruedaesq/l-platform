import styled from 'styled-components';

const StyledButton = styled.button`
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.principal};
  color: ${(props) => props.theme.principal};
  border-radius: 5px;
  background: white;

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out,
    border 150ms ease-in-out;
  transition: all 0.2s;
  height: 48px;
  padding-left: 40px;
  padding-right: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    border-color: ${(props) => props.theme.principalDark};
    color: ${(props) => props.theme.principalDark};
    background: white;
  }

  &:active {
    background-color: ${(props) => props.theme.principal};
    color: white;
    border-color: ${(props) => props.theme.principal};
  }
`;

function Button({ content, handleClick }) {
  return (
    <StyledButton type='button' onClick={handleClick}>
      {content}
    </StyledButton>
  );
}

export default Button;
