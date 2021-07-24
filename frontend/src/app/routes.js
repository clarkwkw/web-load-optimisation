import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoadingBackdrop from './components/shared/loadingBackdrop';
import { withRouter } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const RoutesProvider = ({ setThemeLight }) => {
    const classes = useStyles();
    setThemeLight(window.location.pathname !== "/become-teacher");
    return (
        <Container className={classes.root}>
            <Suspense fallback={<LoadingBackdrop open={true}/>}>
                <Switch>
                    
                </Switch>
            </Suspense>
        </Container>
    );
};

RoutesProvider.propTypes = {
    setThemeLight: PropTypes.func,
}

export default withRouter(RoutesProvider);
