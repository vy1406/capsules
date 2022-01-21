import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Header from '../header/Header';
import UserCapsules from '../user-capsules/UserCapsules';
import TeamCapsules from '../team-capsules/TeamCapsules';
import AdminPage from '../admin-page/AdminPage';
import {getUserData} from '../../store/actions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Container = ( {
  getUserData,
  userData
}) => {

  useEffect(() => {
    getUserData()
  }, [])


  const theme = useTheme();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <div>
          <Header />
          <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
            <AppBar position="static">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="My Week" {...a11yProps(0)} />
                <Tab label="Team Week" {...a11yProps(1)} />
                <Tab label="Admin" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <UserCapsules />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <TeamCapsules />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <AdminPage />
                </TabPanel>
            </SwipeableViews>
            </Box>
      </div>
    
  );
}


const mapDispatchToProps = {
  getUserData,
};

const mapStateToProps = state => ({
  userData: state.globalReducer.userData,
  // modalType: state.globalReducer.modalType,
  // isModalOpen: state.globalReducer.isModalOpen,
  // modalData: state.globalReducer.modalData
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Container);