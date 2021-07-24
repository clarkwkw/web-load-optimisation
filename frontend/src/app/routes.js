import React, { Suspense, lazy } from 'react';
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import LoadingBackdrop from './components/shared/loadingBackdrop';
import HomeScreen from './components/homeScreen';
import AboutScreen from './components/aboutScreen';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const RoutesProvider = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Suspense fallback={<LoadingBackdrop open={true}/>}>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/about' component={AboutScreen}/>
                </Switch>
            </Suspense>
        </Container>
    );
};

RoutesProvider.propTypes = {
    setThemeLight: PropTypes.func,
}

export default withRouter(RoutesProvider);
