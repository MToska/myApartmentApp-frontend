import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


function ResultsCalculator(props) {
    return (
        <div>
            <div style={{ display: 'flex', marginTop: '3em', marginLeft:'1em' }}>
                <Grid item xs={6}>
                    <Typography> <b> Koszty stałe </b> </Typography>
                    <Table style={{
                        width: '90%'
                    }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    PCC (podatek od czynności cywilnoprawnej) od umowy kupna
                                 </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.PCCpurchase}
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
                                    {props.mortgageRegisterFeeProprietorship}
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
                                    {props.mortgageRegisterFeeMortgage}
                                </TableCell>
                                <TableCell>
                                    Opłata ta pobierana jest przez notariusza przy dokonywaniu czynności.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={6}>
                    <Typography> <b> Koszty podlegające negocjacji </b> </Typography>
                    <Table style={{
                        width: '90%'
                    }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Notariusz - umowa sprzedaży
                                </TableCell>
                                <TableCell align="right" style={resultCalculator_boldCell}>
                                    {props.conveyancerFee}
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
                                    {props.agentFee}
                                </TableCell>
                                <TableCell>
                                    2% + 23% VAT, możliwość negocjacji przed wejściem do mieszkania
                                    </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </div>
            <Typography style={{ marginTop: '3em', textAlign: 'right', marginRight: '6em', fontSize: '2em' }}>
                Final price: {props.finalPrice}
            </Typography>
        </div>

    )
}

const resultCalculator_boldCell = {
    fontWeight: 'bold'
};

export default ResultsCalculator;