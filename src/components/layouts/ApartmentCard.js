import React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import iconApartment from '../../photos/iconApartment.jpg'
import { withStyles } from '@material-ui/styles';

let imgUrl = 'https://rentpath-res.cloudinary.com/w_370,h_370,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/3e551a5c0debe557c97e6ed46c5eb54f';

class ApartmentCard extends React.Component {
    render() {
        let apartmentsList = this.props.apartmentsList;
        return (
            <div>
                {
                    apartmentsList.map(apartment => {
                        return (
                            <StyledCard>
                                <CardMedia>
                                    <img src={iconApartment} alt="icon apartment" style={{ width: '200px', height: '150px' }} />
                                </CardMedia>
                                <CardContent>
                                    <Typography component="h5" variant="h5">
                                        {apartment.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {apartment.localization}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {apartment.price}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Liczba pokoi: {apartment.room_numbers}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
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

export default ApartmentCard;