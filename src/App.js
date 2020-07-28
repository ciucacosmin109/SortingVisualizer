import React, { Component } from 'react';
import { Route } from 'react-router';

import './custom.css'

import { Layout } from './components/Layout';
import { Home } from './components/Home'; 
import { About } from './components/About';
 
export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/index' component={Home} /> 
                <Route exact path='/about' component={About} /> 
            </Layout>
        );
    }
}
