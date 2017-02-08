import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <div className="row">
                        <AppBar title="UNC Tar Heels" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                        <div className="col s12 m7"><Player /></div>
                        <div className="col s12 m5"><TeamStats/></div>
                        <div className="col s12 m5"><TeamList/></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
