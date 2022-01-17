import React from 'react';
import { connect } from "react-redux";
import { toggleModal, setModalType, setModalData } from '../../../store/actions';
import './style.scss'
import Modal from '@mui/material/Modal';
import UserModal from '../UserModal/UserModal';
import Box from '@mui/material/Box';
import { MODAL_TYPES } from '../constants';
import { Button } from '@mui/material';
import InfoModal from '../InfoModal/InfoModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalContainer = ({
    toggleModal,
    setModalType,
    isModalOpen,
    setModalData,
    modalData,
    modalType
}) => {

    const handleClose = () => {
        toggleModal(false)
        setModalType("")
        setModalData(null)
    }

    const openModalByType = () => {
        switch (modalType) {
            case MODAL_TYPES.USER_MODAL: 
                return <UserModal />
            case MODAL_TYPES.INFO_MODAL: 
                return <InfoModal modalData={modalData}/>
            default: 
                return null;
        }
    }
    
    return (
        isModalOpen && 
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
         <Box sx={style}>
            {openModalByType()}
            <Button
                variant="contained"
                onClick={handleClose}>
                Ok
            </Button>
         </Box>       
      </Modal>
         
    );
}

const mapDispatchToProps = {
    toggleModal,
    setModalType,
    setModalData
};

const mapStateToProps = state => ({
    modalType: state.globalReducer.modalType,
    isModalOpen: state.globalReducer.isModalOpen,
    modalData: state.globalReducer.modalData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);