import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    grid:{
        paddingLeft: 60,
        [theme.breakpoints.down('sm')]: {
            padding: '0 30px',
        },
    },
    title: {
        fontWeight: 600,
        color: '#6293C3',
        fontSize: '0.9rem',
        margin: '20px 0'
    },
    content: {
        color: '#999',
        fontSize: '0.9rem',
        margin: '5px 0'
    },
}));

export default function Footer() {
    const classes = useStyles();

    //Footer
    const MenuLink = props => (
        <Link className={classes.content} component={NavLink} display="block" variant="body2" {...props}/>
    );

    return (
        <Container>
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={4} className={classes.grid}>
                    <Typography className={classes.title}>Links</Typography>
                    <MenuLink to='/about'>About Doge</MenuLink>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.grid}>
                    <Typography className={classes.title}>Contact Us</Typography>
                    <Typography className={classes.content}>abc[@]def.com</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
