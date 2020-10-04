import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Card = styled(Link)`
background: #242424;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
width: 560px;
height: 500px;
text-decoration: none;
border-radius: 4px;
transition: all 0.3s ease-out;

&:nth-child(2) {
  margin: 24px;
}

&:hover {
  transform: scale(1.06);
  color: #1c2237;
}

@media screen and (max-width: 960px) {
  width: 90%;

  &:hover {
    transform: none;
  }
}
`;

export const CardInfo = styled.div`
display: flex;
flex-direction: column;
height: 500px;
padding: 24px;
align-items: center;
color: #fff;
`;

export const Section = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
  background-Image: ${({ backgroundImg }) => (backgroundImg ? `url(${backgroundImg})` : null)};
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 40px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

