import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ isLoading }) => {
    return (
        <Fragment>
             <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Fragment>          
    );
}

const mapDispatchToProps = {};
  
const mapStateToProps = state => ({
  isLoading: state.globalReducer.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);