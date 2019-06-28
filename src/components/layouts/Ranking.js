import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

import { CircularProgress } from '@material-ui/core';
import InvestmentCard from './InvestmentCard';

class Ranking extends React.Component {
    state = {
        investmentsList: '',
        ratingList: ''
    }

    componentDidMount() {
        axios.get(`/api/ranking`)
            .then(res => {
                const investmentsList = res.data;
                this.setState({ investmentsList });
            });
        axios.get(`/api/comments`)
            .then(res => {
                const ratingList = res.data;
                this.setState({ ratingList });
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.investmentsList.length === 0 || this.state.investmentsList === '' || this.state.ratingList === ''
                        ? <StyledCircularProgress />
                        : <InvestmentCard ratingList={this.state.ratingList} investmentsList={this.state.investmentsList} />
                }
            </div>
        )
    }
}

const StyledCircularProgress = withStyles({
    root: {
        marginLeft: '50em',
        marginTop: '10em'
    }
})(CircularProgress);

export default Ranking;