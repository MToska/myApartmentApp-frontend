import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import Equalizer from '@material-ui/icons/Equalizer';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';


const styles = {

};

class Menu extends React.Component {
    render() {
        return (

            <div className="row" >
                <Tabs className="col-sm-4">
                    <Link to="/search" href="/search">
                        <Tab label="Wyszukaj mieszkanie" icon={<Home />}>
                        </Tab>
                    </Link>
                </Tabs>

                <Tabs className="col-sm-4">
                    <Link to="/ranking" href="/ranking">
                        <Tab label="Ranking Inwestycji" icon={<TrendingUp />}>
                        </Tab>
                    </Link>
                </Tabs>

                <Tabs className="col-sm-4">
                    <Link to="/calculator" href="/calculator">
                        <Tab label="Kalkulator kosztow dodatkowych" icon={<Equalizer />}>
                        </Tab>
                    </Link>
                </Tabs>

            </div>
        );
    }

}


Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);