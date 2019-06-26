import React from 'react';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import Ratings from './Ratings';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
        investmentsComments: ''
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

                });
            });
    }

    render() {
        console.log(this.state.access);
        console.log(this.props.params);
        const { classes } = this.props;

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



        return (
            <div style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
                {this.state.investmentName}
                <Typography variant="subtitle1" color="textSecondary">
                    <StarRatings
                        rating={this.state.investmentDetails.grading}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension='25px'
                    />
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
                <Ratings />
            </div>
        )
    }
}

export default withStyles(styles)(InvestmentDetails);