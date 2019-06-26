import React from 'react';
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
            <div className="row"
                 style={menu_container}>
                <StyledTabs className="col-sm-4">
                    <Link to="/search" href="/search">
                        <Tab label="Wyszukaj mieszkanie" icon={<Home />}>
                        </Tab>
                    </Link>
                </StyledTabs>
                <StyledTabs className="col-sm-4">
                    <Link to="/ranking" href="/ranking">
                        <Tab label="Ranking Inwestycji" icon={<TrendingUp />}>
                        </Tab>
                    </Link>
                </StyledTabs>
                <StyledTabs className="col-sm-4">
                    <Link to="/calculator" href="/calculator">
                        <Tab label="Kalkulator kosztow dodatkowych" icon={<Equalizer />}>
                        </Tab>
                    </Link>
                </StyledTabs>
            </div>
        );
    }

}

const menu_container = {
    backgroundColor: '#fafafa'
};

const StyledTabs = withStyles({
    root: {
        padding: '0em 10%'  
    }
})(Tabs);


export default withStyles(styles)(Menu);