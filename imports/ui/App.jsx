import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {
    constructor(props) {
        super(props);
        // seeting up the state
        this.state = {
            players: []
        };
    }

    componentWillMount() {
        this.setState({
            players: [
                {
                    _id: 1,
                    name: "Ed Cota",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 2,
                    blockingAbilities: 3,
                    gameStrategy: 1,
                    playmakingRisks: 3
                }, {
                    _id: 2,
                    name: "Antawn Jamison",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 2,
                    blockingAbilities: 3,
                    gameStrategy: 1,
                    playmakingRisks: 3
                }, {
                    _id: 3,
                    name: "Serge Zwikker",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 2,
                    blockingAbilities: 3,
                    gameStrategy: 1,
                    playmakingRisks: 3
                }
            ]
        });
    }

    renderPlayers() {
        return this.state.players.map((player) => (<TeamList key={player._id} player={player}/>));
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <div className="row">
                        <AppBar title="UNC Tar Heels" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                        <div className="col s12 m7"><Player/></div>
                        <div className="col s12 m5">
                            <h2>Team List</h2>
                            <Divider/>
                            <List>
                                {this.renderPlayers()}
                            </List>
                            <Divider/>
                        </div>
                        <div className="col s12 m5"><TeamStats/></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
