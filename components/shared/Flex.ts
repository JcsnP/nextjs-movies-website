import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  width: 100%;
`;

export default Flex