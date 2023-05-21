import styled from 'styled-components'

interface CardProps {
  bg?: string
  height?: string
}

interface CardBodyProps {
  padding?: string
}

export const Card = styled.div<CardProps>`
  border-radius: 7px;
  background-color: ${props => props.bg || 'transparent'};
  display: block;
  width: 100%;
  height: ${props => props.height || 'auto'};
  border: 1px solid grey;
  margin-bottom: 10px;
  color: white;
  overflow-y: scroll;
`;

export const CardBody = styled.div<CardBodyProps>`
  padding: ${props => props.padding || '14px'};
`;

export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const CardTitle = styled.h4`
  text-align: center;
  display: block;
`;