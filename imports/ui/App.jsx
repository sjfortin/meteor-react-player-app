import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Players } from '../api/players';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditPlayer';

const tempPlayer = {
    name: "Temp Player",
    team: "Team",
    ballManipulation: 3,
    kickingAbilities: 3,
    passingAbilities: 3,
    duelTackling: 3,
    fieldCoverage: 3,
    blockingAbilities: 3,
    gameStrategy: 3,
    playmakingRisks: 3,
    notes: "This player is only temporary",
}

export class App extends Component {
    constructor(props) {
        super(props);
        // seeting up the state
        this.state = {
          currentPlayer: tempPlayer,
          showEditPlayer: false,
        };
        this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.showTeamStats = this.showTeamStats.bind(this);
    }

    renderPlayers() {
        return this.props.players.map((player) => (
            <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
        ));
    }

    updateCurrentPlayer(player) {
        this.setState({
            currentPlayer: player,
        });
    }

    showEditForm() {
        this.setState({
            showEditPlayer: true,
        });
    }

    showTeamStats() {
        this.setState({
            showEditPlayer: false,
        });
    }

    showForm() {
        if(this.state.showEditPlayer === true) {
            return ( <Edit currentPlayer={this.state.currentPlayer}
            showTeamStats={this.showTeamStats}/>);
        } else {
            return ( <TeamStats />);
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <div className="row">
                        <AppBar title="Soccer App" iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}><AccountsWrapper /></AppBar>

                        <div className="col s12 m7"><Player player={this.state.currentPlayer} showEditForm={this.showEditForm}/></div>
                        <div className="col s12 m5">
                            <h2>Team List</h2><Link to="/new" className="waves-effect waves-light btn">Add Player</Link>
                            <Divider/>
                            <List>
                                {this.renderPlayers()}
                            </List>
                            <Divider/>
                        </div>
                        <div className="col s12 m5">{this.showForm()}</div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    players: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('players');
    const user = Meteor.userId();

    return {
        players: Players.find({ owner: user }, {sort: { name: 1}}).fetch(),
    };
}, App);
