import React from 'react';
import Avatar from '@mui/material/Avatar';
import { connect } from "react-redux";
import { toggleModal, setModalType } from '../../store/actions';
import { MODAL_TYPES } from '../modals/constants';
import DateUI from '../../common/date/DateUI';
import './style.scss'

const Header = ({
    toggleModal,
    setModalType
}) => {
    
    const handleOnClick = () => {
        setModalType(MODAL_TYPES.USER_MODAL)
        toggleModal(true)
    }

    return (
        <div className="headerWrap">
            <DateUI date={new Date()}/>
            <Avatar
                sx={{ bgcolor: "#1976d2" }}
                onClick={handleOnClick}
            >
                OP
            </Avatar>
        </div>
    );
}

const mapDispatchToProps = {
    toggleModal,
    setModalType
};

const mapStateToProps = state => ({
    // modalType: state.globalReducer.modalType,
    // isModalOpen: state.globalReducer.isModalOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);