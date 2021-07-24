import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export default function LoadingBackdrop({...otherProps}) {
    const classes = useStyles();
    return (
        <Backdrop 
        className={classes.backdrop}
        data-hok6HtmlElement='spinner'
        {...otherProps}
        >
            <CircularProgress />
        </Backdrop>
    )
}

LoadingBackdrop.propTypes = {
    open: PropTypes.bool.isRequired,
}
