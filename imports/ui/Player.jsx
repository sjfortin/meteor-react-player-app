import React, {Component} from 'react';
import {Card, CardMedia, CardText, CardTitle, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, lightBlue800, lightBlue50} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    button: {
        margin: 12
    }
};

export default class Player extends Component {
  showEditForm() {
    this.props.showEditForm();
  }
    render() {
      const player = this.props.player;
      const defense = player.duelTackling + player.fieldCoverage + player.blockingAbilities + player.gameStrategy + player.playmakingRisks;
      const offense = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.playmakingRisks;
      const total = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.playmakingRisks + player.duelTackling + player.blockingAbilities;

        return (
            <Card>
                <CardMedia overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}>
                    <img src="messi.jpg"/>
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.ballManipulation}
                            </Avatar>
                            ballManipulation
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={blue200} backgroundColor={lightBlue800}>
                                {player.kickingAbilities}
                            </Avatar>
                            kickingAbilities
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.passingAbilities}
                            </Avatar>
                            passingAbilities
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.gameStrategy}
                            </Avatar>
                            gameStrategy
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.duelTackling}
                            </Avatar>
                            duelTackling
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.fieldCoverage}
                            </Avatar>
                            fieldCoverage
                        </Chip>
                        <Chip backgroundColor={blue200} style={styles.chip}>
                            <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                                {player.blockingAbilities}
                            </Avatar>
                            blockingAbilities
                        </Chip>
                    </div>
                </CardText>
                <CardActions>
                  <RaisedButton
                    label="Edit player/stats"
                    labelPoistion="before"
                    style={styles.button}
                    onClick={this.showEditForm.bind(this)}/>
                </CardActions>
            </Card>
        )
    }
}
