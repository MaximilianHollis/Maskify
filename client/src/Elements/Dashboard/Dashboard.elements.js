import styled from 'styled-components';
import { Section, Button } from '../../globalStyles'

export const Card = styled.div`
background: #242424;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
height: 500px;
text-decoration: none;
border-radius: 4px;
transition: all 0.3s ease-out;
color: #fff;

&:nth-child(2) {
  margin: 24px;
}

@media screen and (max-width: 960px) {
  width: 100%;
  padding: 0;
  height: 60%;

  &:hover {
    transform: none;
  }
}
`;

export const CardInfo = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
align-items: center;
color: #fff;
`;

export const DashRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const DashColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;
  max-width: ${({ full }) => (full ? '100%' : '50%')};


  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
    padding: 16px 16px 16px 16px;
`;


export const CameraHeader = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CameraButton = styled(Button)`
  padding: 12px;
  margin: 12px;
`