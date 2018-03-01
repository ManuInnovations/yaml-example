import React from 'react'
import { slide as NavMenu } from 'react-burger-menu'
import { withSiteData, Link } from 'react-static'
import { map } from 'lodash';
import content from '../content';


var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
        '@media (minWidth: 576px)': {
            display: 'none'
        }
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: 'rgba(0, 0, 0, 0.8)',
        fontSize: '1.2em',
        height: '100%',
        width: '100%',
    },
    bmMenuWrap: {
        top: '0'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '1em',
        letterSpacing: '1px',
        textAlign: 'center',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const MENUS = content('menus');


const Menu = ({ items }) => (
    <ul>
        {map(items, (label, path) => (
            <li className="menu-item" style={{ listStyleType: 'none', marginBottom: '1em' }}>
                <Link to={`${path}`}  >
                    {label}
                </Link >
            </li>
        ))}
    </ul>
);

const Burger = () => (
    <NavMenu right styles={styles}>
        <Menu items={MENUS} />
    </NavMenu>

);

export default Burger;