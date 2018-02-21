import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Images } from '../assets';
import content from '../content';
import colors from '../styles/colors';
import { Section, Container } from './commons';

const CLASSES = {
  menu: 'pure-menu pure-menu-horizontal',
  menuList: 'pure-menu-list',
  menuItem: 'pure-menu-item',
  menuLink: 'pure-menu-link',
  brand: 'pure-menu-heading pure-menu-link',
  section: 'pure-g',
  container: 'pure-u-0 pure-u-sm-1 pure-u-md-1 pure-u-lg-1 pure-u-xl-1',
  button: 'pure-button',
};

const Logo = styled.img`
  margin-left: 1em;
  margin-bottom: 0.5em;
  height: 82px;
`;

const StyledLink = styled(Link) `
  padding: 0;
  margin: 0 1rem;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    width: 0;
    height: 2px;
    background: ${colors.BLUE};
    transition: width 400ms ease;
  }
  &:hover {
    background: transparent;
    &:after {
      width: 100%;
    }
  }
`;

const Menu = ({ items }) => (
  <div className={CLASSES.menu}>
    <Link to="/" className={CLASSES.brand}>
      <Logo src={Images.logo} alt={content('app.title')} />
    </Link>
    <ul className={CLASSES.menuList}>
      {map(items, (label, path) => (
        <li key={`menu_${path}`} className={CLASSES.menuItem}>
          <StyledLink className={CLASSES.menuLink}>{label}</StyledLink>
        </li>
      ))}
    </ul>
  </div>
);

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  background: transparent;
  color: ${colors.BLUE};
  border: 1px solid ${colors.BLUE};
  padding: 0.5rem 2rem;
  transition: background-color 200ms ease, color 200ms ease;
  &:hover {
    background-color: ${colors.BLUE};
    color: white;
    border: 1px solid #009edb;
  }
`;

export default withSiteData(() => {
  const MENUS = content('menus');
  return (
    <Section className={CLASSES.section}>
      <Container className={CLASSES.container} style={{ display: 'flex' }}>
        <NavLeft>
          <Menu items={MENUS} />
        </NavLeft>
        <NavRight>
          <LoginButton className={CLASSES.button}>
            {content('buttons.login').toUpperCase()}
          </LoginButton>
        </NavRight>
      </Container>
    </Section>
  );
});
