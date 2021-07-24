import React from 'react';

import PropTypes from "prop-types";
import {Container, Grid, Paper, Typography, Zoom, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ExternalLink from './shared/externalLink';
import Image1 from '../../assets/comic/comic_1.png';
import Image2 from '../../assets/comic/comic_2.png';
import Image3 from '../../assets/comic/comic_3.png';

import _ from 'lodash';

const images = [
    Image1,
    Image2,
    Image3,
]

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#F2F2F2',
        padding: '30px 64px',
        paddingBottom: '64px',
        boxShadow: 'unset',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 5px',
            marginBottom: 20,
        },
    },
    whitePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#FFF',
        paddingLeft: 0,
        paddingRight: 0,
        boxShadow: 'unset'
    },
    whiteFont: {
        color: '#FFF',
        fontWeight: 600,
        paddingBottom: '128px',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '1.4em'
            //The styles below are added as the disclaimer button is temp. commented
            fontSize: '1.86em',
            paddingBottom: '58px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '48px',
        },
        marginBottom: 0,
    },
}));

const SingleCell = props => {
    const classes = useStyles();
    const { delay, img } = props;
    return (
        <Grid item xs={12}>
            <Zoom in style={{transitionDelay: `${delay}ms`}}>
                <Paper className={classes.whitePaper}>
                    <CardMedia component="img" image={img} />
                </Paper>
            </Zoom>
        </Grid>
    );
}
SingleCell.propTypes = {
    delay: PropTypes.number.isRequired,
    img: PropTypes.element.isRequired,
}

export default function HomeScreen() {
    const classes = useStyles();
    return (<>
        <Typography variant="h4" className={classes.whiteFont}>Wolf!</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid item justifyContent="center">
                        <Container>
                            <Grid container spacing={3} direction="column" justifyContent="space-evenly"
                                  alignItems="center">
                                {_.map(images, (img, index) => <SingleCell key={index} delay={(index+1)*500} img={img} />)}
                            </Grid>
                            <Typography>Credit: <ExternalLink url="https://www.pinterest.com/pin/480618591458128944/">Pinterest</ExternalLink></Typography>
                        </Container>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </>);
}
