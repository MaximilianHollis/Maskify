import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Bold } from '../../globalStyles'
import {
  PricingButton,
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

export default function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Basic</PricingCardPlan>
                <PricingCardCost>$10.00</PricingCardCost>
                <PricingCardLength>per month, first month free</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One Live cam</PricingCardFeature>
                  <PricingCardFeature>Daily status report</PricingCardFeature>
                  <PricingCardFeature>Basic analytics</PricingCardFeature>
                </PricingCardFeatures>
                <PricingButton>Unavailable</PricingButton>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/register'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Premium</PricingCardPlan>
                <PricingCardCost>FREE</PricingCardCost>
                <PricingCardLength>for open beta</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature><Bold>Live</Bold> data</PricingCardFeature>
                  <PricingCardFeature>Hourly status reports</PricingCardFeature>
                  <PricingCardFeature>Push notifications</PricingCardFeature>
                  <PricingCardFeature>Next Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <PricingButton primary>Choose Plan</PricingButton>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Enterprise</PricingCardPlan>
                <PricingCardCost>$100.00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature><Bold>Live</Bold> data</PricingCardFeature>
                  <PricingCardFeature>Unlimited live cams</PricingCardFeature>
                  <PricingCardFeature><Bold>Realtime</Bold> analytics and data</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <PricingButton>Unavailable</PricingButton>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
