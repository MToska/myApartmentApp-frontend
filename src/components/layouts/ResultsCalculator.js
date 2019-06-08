import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class ResultsCalculator extends React.Component {
    render() {

        return (
            <div style={{ display: 'flex' }}>
                <Grid item xs={6}>
                    <Typography> Koszty stałe </Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    PCC (podatek od czynności cywilnoprawnej) od umowy kupna
                                 </TableCell>
                                <TableCell align="right">
                                    12345
                                </TableCell>
                                <TableCell align="right">
                                    2% - podstawa prawna art. 7 ust 1 pkt 1 Ustawy o PCC
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    PCC od ustanowienia hipoteki
                                </TableCell>
                                <TableCell align="right">
                                    12345
                                </TableCell>
                                <TableCell>
                                    zgodnie z art. 7 ust 1 pkt 7a ustawy o PCC "na zabezpieczenie wierzytelności istniejących - od kwoty zabezpieczonej wierzytelności - 0,1%. Założyłam, że kredyt będziesz musiał wziąć na 440 000 zł.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    Wpis do księgi wieczystej prawa własności
                                    </TableCell>
                                <TableCell align="right">
                                    12345
                                </TableCell>
                                <TableCell>
                                    Opłata ta pobierana jest przez notariusza przy dokonywaniu czynności.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                    Wpis hipoteki zwykłej w księgę wieczystą
                                </TableCell>
                                <TableCell align="right">
                                    12345
                                </TableCell>
                                <TableCell>
                                    Opłata ta pobierana jest przez notariusza przy dokonywaniu czynności.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={6}>
                    <Typography> Koszty podlegające negocjacji </Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Notariusz - umowa sprzedaży
                                </TableCell>
                                <TableCell align="right">
                                    12345
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
                                <TableCell align="right">
                                    12345
                                </TableCell>
                                <TableCell>
                                    2% + 23% VAT, możliwość negocjacji przed wejściem do mieszkania
                                    </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </div>
        )
    }
}


export default ResultsCalculator;