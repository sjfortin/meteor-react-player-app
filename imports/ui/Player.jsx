import React, {Component} from 'react';
import {Card, CardMedia, CardText, CardTitle, CardActions} from 'material-ui/Card';

export default class Player extends Component {
    render() {
        return (
            <Card>
                <CardMedia overlay={<CardTitle title="Lionel Messi" subtitle="Offense: 12 - Defense: 8" />}>
                    <img src="messi.jpg"/>
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions></CardActions>
            </Card>
        )
    }
}