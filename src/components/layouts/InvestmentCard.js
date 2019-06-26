
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import iconApartment from '../../photos/iconApartment.jpg';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


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
        let investmentsList = this.props.investmentsList;
        console.log(investmentsList);
        return (
            <div>
                {
                    investmentsList.map(investment => {
                        return (
                            <div>
                                <Card style={{ display: 'inline-flex', width: '100%' }}>
                                    <Button style={{ width: '100%' }} onClick={() => this.setState({
                                        open: true,
                                        title: investment.investment_name,
                                        localization: investment.localization,
                                        developer: investment.developer,
                                        endDate: investment.end_date,
                                        description: investment.description,
                                        grading: investment.grading
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
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    <StarRatings
                                                        rating={investment.grading}
                                                        starRatedColor="yellow"
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Button>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default withRouter(InvestmentCard);