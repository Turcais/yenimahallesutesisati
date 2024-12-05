import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home-1'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            }
        ]
    },

    {
        id: 6,
        title: 'Event',
        link: '/event',
        submenu: [
            {
                id: 61,
                title: 'Event 1',
                link: '/event',
            },
            {
                id: 61,
                title: 'Event 2',
                link: '/event-s2',
            },
            {
                id: 62,
                title: 'Event single',
                link: '/event-single/Exploring-Islamic-Insights-and-Wisdom'
            }
        ]
    },
    {
        id: 7,
        title: 'Service',
        link: '/service',
        submenu: [
            {
                id: 71,
                title: 'Service 1',
                link: '/service',
            },
            {
                id: 71,
                title: 'Service 2',
                link: '/service-s2',
            },
            {
                id: 72,
                title: 'Service Single',
                link: '/service-single/Quran-Memorization'
            }
        ]
    },
    {
        id: 8,
        title: 'Shop',
        link: '/shop',
        submenu: [
            {
                id: 81,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 82,
                title: 'Shop Single',
                link: '/product-single/Perfume'
            },
            {
                id: 83,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 84,
                title: 'Checkout',
                link: '/checkout'
            },
        ]
    },
    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About',
                link: '/about'
            },
            {
                id: 32,
                title: 'Donate',
                link: '/donate'
            },
            {
                id: 33,
                title: 'Login',
                link: '/login'
            },
            {
                id: 34,
                title: 'Register',
                link: '/register'
            },
            {
                id: 5,
                title: 'forgot password',
                link: '/forgot'
            },
            {
                id: 6,
                title: '404',
                link: '/404'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/The-Importance-Of-Marriage-In-Islam.'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/The-Importance-Of-Marriage-In-Islam.'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/The-Importance-Of-Marriage-In-Islam.'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;