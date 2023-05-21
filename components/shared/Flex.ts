import { styled } from "styled-components";

interface CustomProps {
  direction?: string
}

const Flex = styled.div<CustomProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  width: 100%;
`;

export default Flex