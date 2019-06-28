import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';

function ResultsCalculator(props) {
    return (
        <div>
            <div style={containerStyle}>
                <Grid item xs={6}>
                    <Typography> <b> Koszty stałe </b> </Typography>
                    <StyledTable>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    PCC (podatek od czynności cywilnoprawnej) od umowy kupna
                                 </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.PCCpurchase} PLN
                                </TableCell>
                                <TableCell align="right">
                                    2% - podstawa prawna art. 7 ust 1 pkt 1 Ustawy o PCC
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    Wpis do księgi wieczystej prawa własności
                                    </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.mortgageRegisterFeeProprietorship} PLN
                                </TableCell>
                                <TableCell>
                                    Opłata ta pobierana jest przez notariusza przy dokonywaniu czynności.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    Wpis hipoteki zwykłej w księgę wieczystą
                                </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.mortgageRegisterFeeMortgage} PLN
                                </TableCell>
                                <TableCell>
                                    Opłata ta pobierana jest przez notariusza przy dokonywaniu czynności.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </StyledTable>
                </Grid>
                <Grid item xs={6}>
                    <Typography> <b> Koszty podlegające negocjacji </b> </Typography>
                    <StyledTable>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Notariusz - umowa sprzedaży
                                </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.conveyancerFee} PLN
                                </TableCell>
                                <TableCell align="right">
                                    maksymalna taksa notarialna ustala na podstawie Rozporządzenia MS § 3 pkt. 5
                                    "powyżej 60 000 zł do 1 000 000 zł - 1010 zł + 0,4% od nadwyżki powyżej 60 000 zł".
                                     Są to ceny maksymalne możemy znaleźć notariusza, który weźmie mniej.
                                     Do tej kwoty należy doliczyć 23% VAT.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    Koszty pośrednika
                                </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.agentFee} PLN
                                </TableCell>
                                <TableCell>
                                    2% + 23% VAT, możliwość negocjacji przed wejściem do mieszkania
                                    </TableCell>
                            </TableRow>
                        </TableBody>
                    </StyledTable>
                </Grid>
            </div>
            <StyledTypography>
                Cena całkowita: {props.finalPrice} PLN
            </StyledTypography>
        </div>
    )
}

const StyledTable = withStyles({
    root: {
        width: '90%'
    }
})(Table);

const StyledTypography = withStyles({
    root: {
        marginTop: '3em',
        textAlign: 'right',
        marginRight: '6em',
        fontSize: '2em'
    }
})(Typography);

const containerStyle = {
    display: 'flex',
    marginTop: '3em',
    marginLeft: '1em'
};

const resultCalculator_boldCell = {
    fontWeight: 'bold'
};

export default ResultsCalculator;