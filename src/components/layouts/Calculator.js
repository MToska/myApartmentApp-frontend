import React from 'react';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import CalculatorPhoto from '../../photos/calculator.jpg';
import axios from 'axios';
import ResultsCalculator from './ResultsCalculator';

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



class Calculator extends React.Component {
    state = {
        apartmentPrice: ' '
    }

    handleClick = e => {
        const apartmentPrice = this.state.apartmentPrice;
        axios.post('/api/calculator', { apartmentPrice: apartmentPrice })
            .then(response => {
                this.setState({
                    agentFee: response.data.agentFee,
                    conveyancerFee: response.data.conveyancerFee,
                    PCCpurchase: response.data.PCCpurchase,
                    mortgageRegisterFeeProprietorship: response.data.mortgageRegisterFeeProprietorship,
                    mortgageRegisterFeeMortgage: response.data.mortgageRegisterFeeMortgage,
                    finalPrice: response.data.finalPrice
                })
            })
            .catch(err =>
                this.setState({
                    errors: err.response.data
                })
            );
    };

    handleChange = prop => event => {
        this.setState({ apartmentPrice: event.target.value })
    };
    render() {
        console.log(this.state.finalPrice);
        const { classes } = this.props;
        return (
            <div style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
                <Typography style={{ fontSize: '1.5em' }}> Oblicz koszt całkowity inwestycji</Typography>
                <FormControl className={classes.margin} style={{ width: '20%', display: '-webkit-inline-box' }}>
                    <StyledInput
                        placeholder="Wpisz rynkową cene mieszkania"
                        id="adornment-amount"
                        value={this.state.apartmentPrice}
                        onChange={this.handleChange('amount')}
                        startAdornment={<InputAdornment position="start">PLN </InputAdornment>}
                        required="true"
                    />
                    <Divider className={classes.divider} />
                    <IconButton className={classes.iconButton} aria-label="Search" onClick={this.handleClick}>
                        <SearchIcon />
                    </IconButton>
                </FormControl>
                {this.state.finalPrice !== undefined
                    ? <ResultsCalculator
                        agentFee={this.state.agentFee}
                        conveyancerFee={this.state.conveyancerFee}
                        PCCpurchase={this.state.PCCpurchase}
                        mortgageRegisterFeeProprietorship={this.state.mortgageRegisterFeeProprietorship}
                        mortgageRegisterFeeMortgage={this.state.mortgageRegisterFeeMortgage}
                        finalPrice={this.state.finalPrice}
                    />
                    : <img src={CalculatorPhoto} style={{ width: '100%', height: '30em' }} />
                }

            </div>
        )
    }

}

const StyledInput = withStyles({
    root: {
        width: '20em'
    }
})(Input);
export default withStyles(styles)(Calculator);