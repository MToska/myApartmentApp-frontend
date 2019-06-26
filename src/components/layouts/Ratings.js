import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.state = {
            rating: 0
        };
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }
    render() {
        return (
            <div>
                <Typography>Oceń inwestycje</Typography>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="yellow"
                    starHoverColor="yellow"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                />
                <TextField
                    id="filled-multiline-static"
                    label="Oceń inwestycje"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="filled"
                    fullWidth	
                />
                <Button>Dodaj ocene</Button>

            </div>
        )
    }
}
const styles = ({

});

export default Ratings;