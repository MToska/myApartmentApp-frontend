import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { withStyles } from '@material-ui/core/styles';

import { Button, TextField, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.state = {
            rating: 0,
            commentFieldValue: '',
            nameFieldValue: '',
            open: true
        };
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

    onClickHandler = () => {
        if (this.state.commentFieldValue !== '' && this.state.nameFieldValue !== '' && this.state.rating !== 0) {
            const commentDetails = {
                investmentName: this.props.investmentName,
                commentFieldValue: this.state.commentFieldValue,
                nameFieldValue: this.state.nameFieldValue,
                rating: this.state.rating
            }

            axios.post(`/api/comments/add`, { commentDetails: commentDetails })
                .then(res => {
                    alert(res.data);
                });
        } else {
            alert('Uzupełnij wszystkie pola komentarza')
        }
    }

    handleClose() {
        this.setState({ open: false });
    }
    commentFieldChangeHandler = (e) => {
        this.state.commentFieldValue = e.target.value;
    }
    nameFieldChangeHandler = (e) => {
        this.state.nameFieldValue = e.target.value;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.containerStyle}>
                <Typography>Oceń inwestycje</Typography>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="yellow"
                    starHoverColor="yellow"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    style={{ width: '80%' }}

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
                    onChange={this.commentFieldChangeHandler}
                />
                <StyledButton onClick={this.onClickHandler}>Dodaj ocene</StyledButton>
            </div>
        )
    }
}

const styles = {
    containerStyle: {
        textAlign: 'center',
        display: 'grid',
        marginTop: '1em',
        marginLeft: '3em'
    }
};

const StyledButton = withStyles({
    root: {
        backgroundColor: '#d2cfcf',
        width: '70%',
        margin: 'auto'
    }
})(Button);

export default withStyles(styles)(Ratings);