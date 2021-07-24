import React from 'react';

import { CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ExternalLink from './shared/externalLink';
import WikiImage from "../../assets/wiki.jpeg";

const useStyles = makeStyles((theme) => ({
    paragraph: {
        paddingBottom: 20,
        color: theme.palette.text.secondary,
    },
    title: {
        paddingTop: 30,
        color: '#333',
        fontWeight: 600,
        letterSpacing: 2,
        marginTop: 0,
        fontSize: '1.1rem',
        lineHeight: '1.55rem',
        paddingBottom: 40,
    },
    padding: {
        padding: 60,
        [theme.breakpoints.down('md')]: {
            padding: 30,
        },
        [theme.breakpoints.down('sm')]: {
            padding: 10,
        },
    },

    maskA: {
        clipPath: "circle(55.1% at 51% 33%)",
        [theme.breakpoints.down('xs')]: {
            clipPath: 'none',
        },
    },
}));

export default function AboutScreen() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <CardMedia className={classes.mask} component="img" image={WikiImage}/>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.padding}>
                    <Typography className={classes.title}>About Doge</Typography>
                    <Typography className={classes.paragraph}>Doge (often /ˈdoʊdʒ/ DOHJ, /ˈdoʊɡ/ DOHG, /ˈdoʊʒ/ DOHZH[1]) is an Internet meme that became popular in 2013. The meme typically consists of a picture of a Shiba Inu dog accompanied by multicolored text in Comic Sans font in the foreground. The text, representing a kind of internal monologue, is deliberately written in a form of broken English. The meme is based on a 2010 photograph, and became popular in late 2013, being named as Know Your Meme's "top meme" of that year. A cryptocurrency based on Doge, the Dogecoin, was launched in December 2013, and the Shiba Inu has been featured on Josh Wise's NASCAR car as part of a sponsorship deal. Doge has also been referenced by members of the United States Congress, a safety video for Delta Air Lines, a Google Easter egg, and the video for the song "Word Crimes" by "Weird Al" Yankovic. Toward the end of the decade and the beginning of the 2020s, the meme saw a resurgence in popularity due primarily to its association with Dogecoin, which itself hit a market capitalisation of over $90 billion in May 2021. Several online polls and media outlets recognized Doge as one of the best Internet memes of the 2010s.</Typography>
                    <Typography className={classes.paragraph}>Source: <ExternalLink url="https://en.wikipedia.org/wiki/Doge_(meme)">Wikipedia</ExternalLink></Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}