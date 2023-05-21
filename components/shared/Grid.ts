import styled from 'styled-components'

interface CustomProps {
  columns?: number
  gap?: string
}

const Grid = styled.div<CustomProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${props => props.gap || '0px'};
`;

export default Grid;