import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CalculatorPhoto from '../../photos/calculator.jpg';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
}));



const Calculator = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: ''
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Typography style={{ fontSize: '1.5em' }}> Oblicz koszt całkowity inwestycji</Typography>

            <FormControl className={classes.margin} style={{ width: '20%', display: '-webkit-inline-box' }}>
                <StyledInput
                    placeholder="Wpisz rynkową cene mieszkania"
                    id="adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">PLN </InputAdornment>}
                    required="true"
                />
                <Divider className={classes.divider} />
                <IconButton className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </FormControl>
             <img src={CalculatorPhoto} style={{width: '100%', height: '30em' }} />
        </div>
    )
}

const StyledInput = withStyles({
    root: {
        width: '20em'
    }
})(Input);
export default Calculator;