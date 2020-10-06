import styled from 'styled-components';
import { Section, Container } from '../../globalStyles'
import LoginImage from '../../images/login.svg'

export const LoginWrapper = styled.div`
  margin: 0;
  padding: 0px;
  background: #101522;
`

export const LoginContainer = styled(Container)`
  @media screen and (max-width: 760px) {
    padding-right: 5px;
    padding-left: 5px;
    background: #101522;
  }
`

export const LoginSection = styled(Section)`
  background: #101522;
  height: calc(100vh - 80px);
  background-position: left;
  background-size: auto;
  background-repeat: no-repeat;

  @media screen and (min-width: 1060px) {
    background-image: ${() => (true ? `url(${LoginImage})` : null)};
    margin: 0 10%;
}
`;

export const LoginRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: 'row-reverse';
  height: initial;
`;

export const LoginColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 1060px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1660px) {
    transform: translate(240px, -20px);
  }
`;


export const LoginCard = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 700px) {
  width: 95%;
  height: 500px;
}
` 
export const LoginCardHeader = styled.div`
  max-height: 150px;
  max-width: 450px;
  background: #4B59F7;
  border-radius: 40px;
  margin: auto;
  transform: translate(0, -40px);
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);


  @media screen and (max-width: 700px) {
  width: 95%;

}
`
export const LoginCardHeaderText = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 50px 0;
  font-size: 40px;

`

export const LoginFields = styled.div`
  height: auto;
  width: 100%;
  padding: 0 50px;
  font-size: 40px;
`


