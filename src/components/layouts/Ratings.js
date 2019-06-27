import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

import { Button, TextField, Typography } from '@material-ui/core';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.state = {
            rating: 0,
            commentFieldValue: '',
            nameFieldValue: ''
        };
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    onClickHandler = () => {
        const commentDetails = {
            investmentName: this.props.investmentName,
            commentFieldValue: this.state.commentFieldValue,
            nameFieldValue: this.state.nameFieldValue,
            rating: this.state.rating
        }

        axios.post(`/api/comments/add`, { commentDetails: commentDetails })
            .then(res => {
                console.log(res.data);
            });
    }

    commentFieldChangeHandler = (e) => {
        this.state.commentFieldValue = e.target.value;
    }
    nameFieldChangeHandler = (e) => {
        this.state.nameFieldValue = e.target.value;
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
                    label="Imie"
                    multiline
                    rows="1"
                    margin="normal"
                    onChange={this.nameFieldChangeHandler}
                />
                <TextField
                    id="filled-multiline-static"
                    label="Oceń inwestycje"
                    multiline
                    rows="2"
                    margin="normal"
                    fullWidth
                    onChange={this.commentFieldChangeHandler}
                />
                <Button onClick={this.onClickHandler}>Dodaj ocene</Button>
            </div>
        )
    }
}

export default Ratings;