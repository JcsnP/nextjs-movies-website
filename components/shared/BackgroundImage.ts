import styled from 'styled-components'

interface CustomProps {
  height: string
  image: any // it's an image object that sometime has an src, sometime don't
}

const BackgroundImage = styled.div<CustomProps>`
  width: 100%;
  height: ${props => props.height || 'auto'};
  background-image: 
  linear-gradient(65.68deg, rgba(0, 8, 29, 0.6) 9.51%, rgba(53, 13, 49, 0.6) 72.89%, rgba(132, 5, 25, 0.6) 101.01%),linear-gradient(102.21deg, rgba(0, 0, 0, 0.04) 16.09%, rgba(1, 1, 1, 0.17) 39.27%, rgba(1, 1, 1, 0.24) 64.25%, rgba(4, 4, 4, 0.8) 96.63%),
    url(${props => props.image.src ? props.image.src : props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default BackgroundImage;