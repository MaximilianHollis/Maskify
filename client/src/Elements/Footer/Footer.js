import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership below to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submission Video</FooterLink>
            <FooterLink to='/'>AI in depth</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            MASKIFY
          </SocialLogo>
          <WebsiteRights>MASKIFY © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
