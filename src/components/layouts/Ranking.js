import React from 'react';
import InvestmentCard from './InvestmentCard';
import axios from 'axios';

class Ranking extends React.Component {
    state = {
        investmentsList: ''
    }

    componentDidMount() {
        axios.get(`/api/ranking`)
            .then(res => {
                const investmentsList = res.data;
                this.setState({ investmentsList });
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.investmentsList.length === 0 || this.state.investmentsList === ''
                        ? <p> Ładowanie danych </p>
                        : <InvestmentCard investmentsList={this.state.investmentsList} />
                }
            </div>
        )
    }
}


export default Ranking;