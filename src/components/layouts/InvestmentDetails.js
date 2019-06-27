import React from 'react';
import StarRatings from 'react-star-ratings';
import { withStyles } from '@material-ui/styles';

import { Card, CardContent, Typography } from '@material-ui/core';
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
});


class InvestmentDetails extends React.Component {
    state = {
        access: '',
        investmentName: '',
        investmentDetails: '',
        investmentsComments: '',
        rating: ''
    }

    componentDidMount() {
        axios.get('/api/users/checkToken')
            .then(res => {
                this.setState({ access: res.data })
            }, () => {
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
                            console.log(rating)
                            this.setState({ rating });
                        });
                });
            });
    }

    render() {
        console.log(this.state.access);
        console.log(this.props.params);

        let investmentsComments = this.state.investmentsComments;
        let comments;
        if (investmentsComments !== '') {
            comments = (
                investmentsComments.map(comment => {
                    return (
                        <Card style={{ display: 'inline-flex', width: '100%' }}>
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    {comment.author}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {comment.comment}
                                </Typography>
                            </CardContent>
                        </Card>
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
            <div style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
                {this.state.investmentName}
                <Typography variant="subtitle1" color="textSecondary">
                    {stars}
                </Typography>
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
                <Typography> Komentarze</Typography>
                <div>
                    {comments}
                </div>
                {
                    this.state.investmentName !== ''
                        ? <Ratings investmentName={this.state.investmentName} />
                        : <Typography>Loading </Typography>
            }
            </div>
        )
    }
}

export default withStyles(styles)(InvestmentDetails);