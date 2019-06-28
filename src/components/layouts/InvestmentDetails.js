import React from 'react';
import StarRatings from 'react-star-ratings';
import { withStyles } from '@material-ui/styles';

import { Button, Card, CardContent, CircularProgress, Link, Typography } from '@material-ui/core';
import axios from 'axios';
import Ratings from './Ratings';

const queryString = require('query-string');

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    detailsSection: {
        paddingLeft: '1em',
        width: '70%'
    },
    containerSection: {
        display: 'inline-flex',
        marginBottom: '2em'
    }, 
    progress: {
        marginLeft: '50em', 
        marginTop: '10em'
    }
});


class InvestmentDetails extends React.Component {
    state = {
        access: '',
        investmentName: '',
        investmentDetails: '',
        investmentsComments: '',
        rating: ''
    }

    componentWillMount() {
        axios.get('/api/users/checkToken')
            .then(res => {
                this.setState({ access: res.data })
            });
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        this.setState({
            investmentName: values.name
        }, () => {
            const investmentName = this.state.investmentName;
            axios.post(`/api/ranking`, { investmentName: investmentName })
                .then(res => {
                    const investmentDetails = res.data[0];
                    this.setState({ investmentDetails });
                });
            axios.post(`/api/comments`, { investmentName: investmentName })
                .then(res => {
                    const investmentsComments = res.data;
                    this.setState({ investmentsComments });
                });
            axios.post(`/api/comments/rating`, { investmentName: investmentName })
                .then(res => {
                    const rating = res.data.average_grade;
                    this.setState({ rating });
                });
        });
    }
    render() {
        const { classes } = this.props;

        let investmentsComments = this.state.investmentsComments;
        let comments;
        if (investmentsComments !== '') {
            comments = (
                investmentsComments.map(comment => {
                    return (
                        <StyledCard>
                            <CardContent>
                                <div style={{ display: 'flex' }}>
                                    <StyledTypography component="h5" variant="h5">
                                        {comment.author}
                                    </StyledTypography>
                                    <StarRatings
                                        rating={comment.grading}
                                        starRatedColor="yellow"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension='25px'
                                    />
                                </div>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {comment.comment}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    )
                })
            )
        }

        let stars;
        if (this.state.rating !== '') {
            stars = (
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name='rating'
                    starDimension='25px'
                />
            )
        }
        return (
            <div>
                {
                    this.state.access === 'OK'
                        ? this.state.rating !== ''
                            ? < div >
                                <div className={classes.containerSection}>
                                    <div className={classes.detailsSection} >
                                        <Typography component="h5" variant="h5" color="textSecondary">
                                            {this.state.investmentName}
                                        </Typography>
                                        {stars}
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {this.state.investmentDetails.localization}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {this.state.investmentDetails.developer}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Data zakończenia: {this.state.investmentDetails.end_date}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Description: {this.state.investmentDetails.description}
                                        </Typography>
                                    </div>
                                    <div>
                                        {
                                            this.state.investmentName !== ''
                                                ? <Ratings investmentName={this.state.investmentName} />
                                                : <Typography>Loading </Typography>
                                        }
                                    </div>
                                </div>
                                <div>
                                    {comments}
                                </div>
                            </div>
                            : <CircularProgress className={classes.progress} />
                            : <Link to="/login" href="/login">
                                <StyledButton> Zaloguj się aby uzyskać dostęp </StyledButton>
                            </Link>
                }
            </div>

        )
    }
}

const StyledButton = withStyles({
    root: {
        marginTop: '10em',
        marginLeft: '40em',
        backgroundColor: '#d7d7d7'
    }
})(Button);

const StyledCard = withStyles({
    root: {
        display: 'inline-flex',
        width: '100%'
    }
})(Card);

const StyledTypography = withStyles({
    root: {
        marginRight: '1em'
    }
})(Typography);

export default withStyles(styles)(InvestmentDetails);