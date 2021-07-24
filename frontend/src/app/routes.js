import React, { Suspense } from 'react';
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import LoadingBackdrop from './components/shared/loadingBackdrop';
import HomeScreen from './components/homeScreen';
import AboutScreen from './components/aboutScreen';
import DummyScreen1 from './components/dummyScreen1';
import DummyScreen2 from './components/dummyScreen2';
import DummyScreen3 from './components/dummyScreen3';
import DummyScreen4 from './components/dummyScreen4';
import DummyScreen5 from './components/dummyScreen5';
import DummyScreen6 from './components/dummyScreen6';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const RedirectHome = () => {
    return <Redirect to="/" />;
}

const RoutesProvider = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Suspense fallback={<LoadingBackdrop open={true}/>}>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/dummy1' component={DummyScreen1}/>
                    <Route exact path='/dummy2' component={DummyScreen2}/>
                    <Route exact path='/dummy3' component={DummyScreen3}/>
                    <Route exact path='/dummy4' component={DummyScreen4}/>
                    <Route exact path='/dummy5' component={DummyScreen5}/>
                    <Route exact path='/dummy6' component={DummyScreen6}/>
                    <Route component={RedirectHome} />
                </Switch>
            </Suspense>
        </Container>
    );
};

RoutesProvider.propTypes = {
    setThemeLight: PropTypes.func,
}

export default withRouter(RoutesProvider);
