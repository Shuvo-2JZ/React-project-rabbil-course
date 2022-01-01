import React, { Component, Fragment } from 'react';
import Deposit from './components/Deposit';
import ThankYou from './components/ThankYou';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Deposit></Deposit>
                {/* <ThankYou></ThankYou> */}
            </Fragment>
        );
    }
}