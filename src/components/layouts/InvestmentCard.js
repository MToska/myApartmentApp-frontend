
import React from 'react';
import StarRatings from 'react-star-ratings';

import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import iconApartment from '../../photos/iconApartment.jpg';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';


let imgUrl = 'https://rentpath-res.cloudinary.com/w_370,h_370,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/3e551a5c0debe557c97e6ed46c5eb54f';

class InvestmentCard extends React.Component {
    state = {
        open: false,
        title: '',
        localization: '',
        developer: '',
        endDate: '',
        description: ''
    }

    render() {
        let ratingList = Object.entries(this.props.ratingList);
        let investmentsList = this.props.investmentsList;
        return (
            <div>
                {
                    investmentsList.map(investment => {
                        return (
                            <div>
                                <StyledCard>
                                    <Button style={{ width: '100%' }} onClick={() => this.setState({
                                        open: true,
                                        title: investment.investment_name,
                                        localization: investment.localization,
                                        developer: investment.developer,
                                        endDate: investment.end_date,
                                        description: investment.description
                                    }, () => {
                                        this.props.history.push(`/investments/?name=${this.state.title}`)
                                    }
                                    )}>
                                        <CardMedia>
                                            <img src={iconApartment} alt="icon apartment" style={{ width: '200px', height: '150px' }} />
                                        </CardMedia>
                                        <CardContent style={{ display: 'flex' }}>
                                            <div>
                                                <Typography component="h5" variant="h5">
                                                    {investment.investment_name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {investment.localization}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {investment.developer}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    Data zakończenia: {investment.end_date}
                                                </Typography>
                                            </div>
                                            <div style={{
                                                marginLeft: '7em'
                                            }}>
                                                {ratingList.map(ratingMatch => {
                                                    return (
                                                        investment.investment_name === ratingMatch[1]._id
                                                            ? <StarRatings
                                                                rating={ratingMatch[1].average_grade}
                                                                starRatedColor="yellow"
                                                                numberOfStars={5}
                                                                name='rating'
                                                            />
                                                            : null
                                                        )
                                                })
                                                }
                                            </div>
                                        </CardContent>
                                    </Button>
                                </StyledCard>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const StyledCard = withStyles({
    root: {
        display: 'inline-flex',
        width: '100%'
    }
})(Card);

export default withRouter(InvestmentCard);