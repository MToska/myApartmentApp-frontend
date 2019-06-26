import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import iconApartment from '../../photos/iconApartment.jpg'
let imgUrl = 'https://rentpath-res.cloudinary.com/w_370,h_370,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/3e551a5c0debe557c97e6ed46c5eb54f';

class ApartmentCard extends React.Component {
    render() {
        let apartmentsList = this.props.apartmentsList;
        return (
            <div>
                {
                    apartmentsList.map(apartment => {
                        return (
                            <Card style={{ display: 'inline-flex', width: '100%' }}>
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
                            </Card>
                        )
                    })
                }
            </div>
        )
    }

}

export default ApartmentCard;