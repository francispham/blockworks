import {
  StyledNavBar,
  StyledAlert,
  StyledNav,
  StyledImage,
  StyledMenu,
  StyledList,
  StyledListItem,
} from './styles';

import Search from '../Search/Search';
import SideBar from '../SideBar/SideBar';

const topMenu = [
  {
    name: 'asset management',
    link: 'https://blockworks.co/category/asset-management/'
  },
  {
    name: 'defi',
    link: 'https://blockworks.co/category/defi/'
  },
  {
    name: 'education',
    link: 'https://blockworks.co/category/education'
  },
  {
    name: 'macro',
    link: 'https://blockworks.co/category/macro'
  },
  {
    name: 'markets',
    link: 'https://blockworks.co/category/markets'
  },
  {
    name: 'Op-Ed',
    link: 'https://blockworks.co/category/op-ed'
  },
  {
    name: 'profiles',
    link: 'https://blockworks.co/category/profiles'
  },
  {
    name: 'regulation',
    link: 'https://blockworks.co/category/regulation'
  },
];

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledAlert>
        <p>webinar: Role of Institutions in DeFi – <a href="https://blockworks.co/webinars/the-role-of-institutions-in-decentralized-finance/?source=alertbar">Register for free</a></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </StyledAlert>
      <StyledNav>
        <StyledMenu>
          <SideBar />
            <StyledList>
              <StyledListItem>
                <a href="https://blockworks.co/newsletter/">newsletter</a>
              </StyledListItem>
              <StyledListItem>
                <a href="https://blockworks.co/podcasts/">podcasts</a>
              </StyledListItem>
          </StyledList>
        </StyledMenu>
        <div>
          <a href="https://blockworks.co/">
            <StyledImage src="https://blockworks.co/wp-content/uploads/2021/01/Blockworks-Final@2x-6.png" alt="Blockworks" />
          </a>
        </div>
        <StyledMenu>
          <StyledList>
            <StyledListItem>
              <a href="https://blockworks.co/event/">event</a>
            </StyledListItem>
            <StyledListItem>
              <a href="https://blockworks.co/webinars/">webinars</a>
            </StyledListItem>
            <StyledListItem>
              <a href="https://blockworks.co/careers/?_gl=1*zgcvkp*_ga*NzY5NzYxMzQ5LjE2MzM5Nzg3ODg.*_ga_GYL4BXXQX8*MTYzMzk4MjEyMy4yLjEuMTYzMzk4NTM0Ni4w&_ga=2.35520801.1448461418.1633978788-769761349.1633978788/">
                we&apos;re hiring!
              </a>
            </StyledListItem>
          </StyledList>
          <Search />
        </StyledMenu>
      </StyledNav>
      <StyledNav>
        <StyledList>
          {topMenu.map(item => (
            <StyledListItem key={item.name}>
              <a href={item.link}>{item.name}</a>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledNav>
    </StyledNavBar>
  )
}