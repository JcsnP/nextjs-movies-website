import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${props => props.gap || '0px'};
`;

export default Grid;