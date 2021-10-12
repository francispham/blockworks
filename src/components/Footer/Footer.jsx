import { StyledFooter, StyledList, StyledListItem, StyledGridBox, StyledInnerBox, StyledFooterCopy, StyledSocialBox, StyledLogoBox, StyledSubscribeBox, StyledButton, StyledImage } from './styles'

const footerMenu = [
  {
    name: 'about',
    link: 'https://blockworks.co/about-us/',
  },
  {
    name: 'events',
    link: 'https://blockworks.co/events/',
  },
  {
    name: 'webinars',
    link: 'https://blockworks.co/webinars/',
  },
  {
    name: 'newsletter',
    link: 'https://blockworks.co/newsletter/',
  },
  {
    name: 'clients',
    link: 'https://blockworks.co/clients/',
  },
  {
    name: 'careers',
    link: 'https://blockworks.co/careers/',
  },
  {
    name: 'terms of service',
    link: 'https://blockworks.co/terms/',
  },
  {
    name: 'advertise',
    link: 'https://blockworks.co/advertise/',
  },
  {
    name: 'contact us',
    link: 'https://blockworks.co/contact-us/',
  },
]

export default function Footer() {
  return (
    <StyledFooter>
      <StyledGridBox>
        <StyledLogoBox>
          <a href="https://blockworks.co/">
            <StyledImage src="https://blockworks.co/wp-content/uploads/2021/01/Blockworks_Favicon_White.png" alt="Blockworks" />
          </a>
        </StyledLogoBox>
        <StyledInnerBox>
          <StyledList>
            {footerMenu.map(item => (
              <StyledListItem key={item.name}>
                <a href={item.link}>{item.name}</a>
              </StyledListItem>
            ))}
          </StyledList>
          <StyledFooterCopy>&copy; 2021 BLOCKWORKS GROUP</StyledFooterCopy>
        </StyledInnerBox>
        <StyledInnerBox>
          <div>Follow Us</div>
          <StyledSocialBox>Social Icons</StyledSocialBox>
        </StyledInnerBox>
        <StyledSubscribeBox>
          SIGN UP FOR THE NEWSLETTER
          <div>
            <StyledButton href="https://blockworks.co/newsletter/">subscribe</StyledButton>
          </div>
        </StyledSubscribeBox>
      </StyledGridBox>
    </StyledFooter>
  )
}
