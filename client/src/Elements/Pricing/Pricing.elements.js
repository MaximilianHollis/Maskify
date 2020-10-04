import styled from 'styled-components';
import { CardInfo, Card } from '../Universal.elements'

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Card)`
  width: 280px;
  height: 500px;
`;



export const PricingCardInfo = styled(CardInfo)`
height: 500px;
`;

export const PricingCardIcon = styled.div`
margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
margin-bottom: 5px;
font-size: 24px;
`;

export const PricingCardCost = styled.h4`
font-size: 40px;
`;

export const PricingCardLength = styled.p`
font-size: 14px;
margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
margin: 16px 0 32px;
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
margin-bottom: 10px;
`;
