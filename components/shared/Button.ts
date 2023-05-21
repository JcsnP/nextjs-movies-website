import styled from 'styled-components'

interface CustomProps {
  primary?: boolean
  block?: boolean
}

const Button = styled.button<CustomProps>`
  border: none;
  border-radius: 1px;
  font-size: 1.5rem;
  padding: 10px 0;
  font-weight: 600;
  background: transparent;
  color: #FFF;
  ${ props => props.primary && `
    background-color: #E50914;
  `}
  ${ props => props.block && `
    display: block;
    width: 100%;
  `}
  &:hover {
    cursor: pointer;
  }
`;

export default Button