import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {withStyles, makeStyles} from '@material-ui/styles';
import {Image} from "react-bootstrap";
import {NavLink, withRouter} from "react-router-dom";
import {
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    Toolbar
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";

import Bg_1 from "../../../assets/shared/bg_1.png";
import Link from "@material-ui/core/Link";
import { useState } from 'react';

const mobileMenuWidth = 240;
const style = theme => ({
    grow: {
        flexGrow: 1,
    },
    toolBar: {
        paddingTop: 30,
        paddingBottom: 60,
        background: `url(${Bg_1}) no-repeat scroll -18px -170px`,
        backgroundSize: `400px`,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 10,
            paddingBottom: 0,
            backgroundSize: `210px`,
            background: `url(${Bg_1}) no-repeat scroll 8px -79px`,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'table-cell',
            position: 'relative',
            padding: '15px 0',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo: {
        width: '80px',
        [theme.breakpoints.up('md')]: {
            width: '140px',
        },
    },
    logoButton: {
        fontWeight: '600',
        display: 'inline-block',
        padding: '15px 20px',
        position: 'relative',
    },
    button: {
        fontWeight: '500',
        textTransform: 'uppercase',
        textDecoration: 'none',
        letterSpacing: '0.15em',
        display: 'inline-block',
        padding: '15px 20px',
        position: 'relative',
        fontSize: '1.1em',
        "&:before": {
            content: '""',
            position: 'absolute',
            width: '80%',
            height: '3px',
            bottom: 0,
            left: '10%',
            backgroundColor: theme.palette.primary.main,
            visibility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all .5s cubic-bezier(1,.25,0,.75) 0s'
        },
        "&:hover": {
            textDecoration: 'none',
            "&:before": {
                visibility: 'visible',
                transform: 'scaleX(1)'
            },
        },
    },
    active: {
        "&:before": {
            visibility: 'visible',
            transform: 'scaleX(1)'
        },
    },
    drawerPaper: {
        width: mobileMenuWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    fullList: {
        width: 'auto',
    },
});
const useStyles = makeStyles(style);

const MenuLink = props => {
    const classes = useStyles();
    const {startIcon: _startIcon, ...otherProps} = props;
    return (
    <Link color="primary"
            className={`${classes.button} ${window.location.pathname === props.to ? classes.active : ''}`}
            size="large" component={NavLink} {...otherProps}>
        {props.text}
    </Link>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
    startIcon: PropTypes.node,
};

const MenuLinkMobile = props => {
    const {startIcon, text, ...otherProps} = props;
    return (
    <ListItem button component={NavLink} {...otherProps}>
        <ListItemIcon>{startIcon}</ListItemIcon>
        <ListItemText primary={text}/>
    </ListItem>
    );
};

MenuLinkMobile.propTypes = {
    ...MenuLink.propTypes,
};

const createMenuLinks = LinkComponent => {
    return (
        <>
            <LinkComponent to="/about" text="About Doge"/>
        </>
    );
}

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {classes} = props;

    const setMobileMenu = useCallback((open, event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenuOpen(open);
    }, []);
    const setMobileMenuOpen = useCallback(event => {
        setMobileMenu(true, event);
    }, [setMobileMenu]);
    const setMobileMenuClose = useCallback(event => {
        setMobileMenu(false, event);
    }, [setMobileMenu]);
    return (
        <Container className={classes.container}>
            <Toolbar className={classes.toolBar}>
                <MenuLink to='/' className={classes.logoButton}
                            text={<Image src="/icons/logo.png" className={classes.logo}/>}/>
                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                    {createMenuLinks(MenuLink)}
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton color="primary" aria-label="show more" onClick={setMobileMenuOpen}>
                        <MenuIcon/>
                    </IconButton>
                </div>
            </Toolbar>
            <SwipeableDrawer
                anchor="right"
                open={menuOpen}
                onClose={setMobileMenuOpen}
                onOpen={setMobileMenuClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div
                    className={clsx(classes.list, {[classes.fullList]: "right" === 'top' || "right" === 'bottom',})}
                    role="presentation"
                    onClick={setMobileMenuClose}
                    onKeyDown={setMobileMenuClose}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={setMobileMenuClose}>
                            {props.theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        {createMenuLinks(MenuLinkMobile)}
                    </List>
                </div>
            </SwipeableDrawer>
        </Container>
    );
}

Header.propTypes = {
    token: PropTypes.string,
    currentUser: PropTypes.object,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default withRouter(withStyles(style, {withTheme: true})(Header));
