import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Bold = styled.p`
  font-weight: bold;
  display: inline;
`



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

export default GlobalStyle;
