import { styled } from "styled-components";

interface TitleProps {
  align?: string
}

export const Title = styled.h1<TitleProps>`
  font-size: 3.4rem;
  color: ${props => props.color || 'black'};
  text-align: ${props => props.align || 'left'}
`;

export const SubTitle = styled.span`
  font-size: 2rem;
  color: ${props => props.color || 'black'};
`;