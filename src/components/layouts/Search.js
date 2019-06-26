import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ApartmentCard from './ApartmentCard';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const styles = {

}; 

class Search extends React.Component {

    state = {
        apartmentsList: '',
        priceMin: '',
        priceMax: '',
        localization: '',
        roomNumbers: ''
    }

    componentDidMount() {
        axios.get(`/api/apartments`)
            .then(res => {
                const apartmentsList = res.data;
                this.setState({ apartmentsList });
            });
    }

    buttonHandler = (e) => {

        const filterData = {
            priceMin: this.state.priceMin,
            priceMax: this.state.priceMax,
            localization: this.state.localization,
            roomNumbers: this.state.roomNumbers
        }
        axios.post(`/api/apartments`, { filterData: filterData })
            .then(res => {
                const apartmentsList = res.data;
                this.setState({ apartmentsList });
            });
    }

    handleChangePriceMin = (event) => {
        this.setState({
            priceMin: event.target.value
        });
    }
    handleChangePriceMax = (event) => {
        this.setState({
            priceMax: event.target.value
        });
    }

    handleChangeLocalization = (event) => {
        this.setState({
            localization: event.target.value
        });
    }

    handleChangeRoomNumbers = (event) => {
        this.setState({
            roomNumbers: event.target.value
        });
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#fafafa'
            }}>
                <form autoComplete="off" style={{ display: 'inline-flex', marginBottom: '1em' }}>
                    <StyledTypography>Cena </StyledTypography>
                    <FormControl>
                        <Select
                            value={this.state.priceMin}
                            onChange={this.handleChangePriceMin}
                            inputProps={{
                                name: 'priceMin',
                                id: 'priceMin-simple',
                            }}
                        >
                            <MenuItem value=''>Dowolna</MenuItem>
                            <MenuItem value={100000}>100 000</MenuItem>
                            <MenuItem value={150000}>150 000</MenuItem>
                            <MenuItem value={200000}>200 000</MenuItem>
                            <MenuItem value={250000}>250 000</MenuItem>
                            <MenuItem value={300000}>300 000</MenuItem>
                            <MenuItem value={350000}>350 000</MenuItem>
                            <MenuItem value={400000}>400 000</MenuItem>
                            <MenuItem value={450000}>450 000</MenuItem>
                            <MenuItem value={500000}>500 000</MenuItem>
                            <MenuItem value={550000}>550 000</MenuItem>
                            <MenuItem value={600000}>600 000</MenuItem>
                            <MenuItem value={650000}>650 000</MenuItem>
                            <MenuItem value={700000}>700 000</MenuItem>
                            <MenuItem value={750000}>750 000</MenuItem>
                            <MenuItem value={800000}>800 000</MenuItem>
                            <MenuItem value={850000}>850 000</MenuItem>
                            <MenuItem value={900000}>900 000</MenuItem>
                            <MenuItem value={1000000}> 1 000 000</MenuItem>
                            <MenuItem value={1050000}> 1 050 000</MenuItem>
                            <MenuItem value={1100000}> 1 100 000</MenuItem>
                            <MenuItem value={1150000}> 1 150 000</MenuItem>
                            <MenuItem value={1200000}> 1 200 000</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel htmlFor="priceMax-simple" style={{ padding: '0 1em'}}>do</InputLabel>
                    <FormControl>
                        <Select
                            value={this.state.priceMax}
                            onChange={this.handleChangePriceMax}
                            inputProps={{
                                name: 'priceMax',
                            }}
                        >
                            <MenuItem value=''>Dowolna</MenuItem>
                            <MenuItem value={100000}>100 000</MenuItem>
                            <MenuItem value={150000}>150 000</MenuItem>
                            <MenuItem value={200000}>200 000</MenuItem>
                            <MenuItem value={250000}>250 000</MenuItem>
                            <MenuItem value={300000}>300 000</MenuItem>
                            <MenuItem value={350000}>350 000</MenuItem>
                            <MenuItem value={400000}>400 000</MenuItem>
                            <MenuItem value={450000}>450 000</MenuItem>
                            <MenuItem value={500000}>500 000</MenuItem>
                            <MenuItem value={550000}>550 000</MenuItem>
                            <MenuItem value={600000}>600 000</MenuItem>
                            <MenuItem value={650000}>650 000</MenuItem>
                            <MenuItem value={700000}>700 000</MenuItem>
                            <MenuItem value={750000}>750 000</MenuItem>
                            <MenuItem value={800000}>800 000</MenuItem>
                            <MenuItem value={850000}>850 000</MenuItem>
                            <MenuItem value={900000}>900 000</MenuItem>
                            <MenuItem value={1000000}> 1 000 000</MenuItem>
                            <MenuItem value={1050000}> 1 050 000</MenuItem>
                            <MenuItem value={1100000}> 1 100 000</MenuItem>
                            <MenuItem value={1150000}> 1 150 000</MenuItem>
                            <MenuItem value={1200000}> 1 200 000</MenuItem>
                        </Select>
                    </FormControl>
                    <StyledTypography>Lokalizacja </StyledTypography>
                    <FormControl>
                        <Select
                            value={this.state.localization}
                            onChange={this.handleChangeLocalization}
                            inputProps={{
                                name: 'localization',
                                id: 'localization-simple',
                            }}
                        >
                            <MenuItem value=''>Dowolna</MenuItem>
                            <MenuItem value="Stare Miasto">Stare Miasto</MenuItem>
                            <MenuItem value="Grzegórzki">Grzegórzki</MenuItem>
                            <MenuItem value="Prądnik Czerwony">Prądnik Czerwony</MenuItem>
                            <MenuItem value="Prądnik Biały">Prądnik Biały</MenuItem>
                            <MenuItem value="Krowodrza">Krowodrza</MenuItem>
                            <MenuItem value="Bronowice">Bronowice</MenuItem>
                            <MenuItem value="Zwierzyniec">Zwierzyniec</MenuItem>
                            <MenuItem value="Dębniki">Dębniki</MenuItem>
                            <MenuItem value="Łagiewniki - Borek Fałęcki">Łagiewniki - Borek Fałęcki</MenuItem>
                            <MenuItem value="Swoszowice">Swoszowice</MenuItem>
                            <MenuItem value="Podgórze Duchackie">Podgórze Duchackie</MenuItem>
                            <MenuItem value="Bieżanów - Prokocim">Bieżanów - Prokocim</MenuItem>
                            <MenuItem value="Podgórze">Podgórze</MenuItem>
                            <MenuItem value="Czyżyny">Czyżyny</MenuItem>
                            <MenuItem value="Mistrzejowcie">Mistrzejowcie</MenuItem>
                            <MenuItem value="Bieńczyce">Bieńczyce</MenuItem>
                            <MenuItem value="Wzgórza Krzesławickie">Wzgórza Krzesławickie</MenuItem>
                            <MenuItem value="Nowa Huta">Nowa Huta</MenuItem>
                        </Select>
                    </FormControl>
                    <StyledTypography>Liczba pokoi </StyledTypography>
                    <FormControl>
                        <Select
                            value={this.state.roomNumbers}
                            onChange={this.handleChangeRoomNumbers}
                            inputProps={{
                                name: 'roomNumbers',
                                id: 'roomNumbers-simple',
                            }}
                        >
                            <MenuItem value=''>Dowolna</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value="more">wiecej niż 5</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" onClick={this.buttonHandler} style={{ marginLeft: '3em' }}>
                        Szukaj
                 </Button>
                </form>
                {
                    this.state.apartmentsList.length === 0 || this.state.apartmentsList === ''
                        ? this.state.apartmentsList === ''
                            ? <p> Ładowanie danych </p>
                            : <p> Brak mieszkań spełniających wybrane kryteria </p>
                        : <ApartmentCard apartmentsList={this.state.apartmentsList} />
                }
            </div>
        )
    }
}

const StyledTypography = withStyles({
    root: {
        padding: '0 2em'
    }
})(Typography);

export default withStyles(styles)(Search);