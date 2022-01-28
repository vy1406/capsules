import React from 'react';
import { connect } from "react-redux";
import { toggleModal, setModalType, setModalData } from '../../../store/actions';
import './style.scss'
import UserModal from '../UserModal/UserModal';
import { MODAL_TYPES } from '../constants';
import { Button } from '@mui/material';
import InfoModal from '../InfoModal/InfoModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

const ModalContainer = ({
    toggleModal,
    setModalType,
    isModalOpen,
    setModalData,
    modalData,
    modalType
}) => {

    const handleOnConfirm = () => {
      toggleModal(false)
      setModalType("")
      setModalData(null)
      modalData.onConfirmCallback && modalData.onConfirmCallback()
    }
    
    const handleClose = () => {
        toggleModal(false)
        setModalType("")
        setModalData(null)
        modalData.onCancelCallback && modalData.onCancelCallback()
    }

    const openModalByType = () => {
        switch (modalType) {
            case MODAL_TYPES.USER_MODAL: 
                return <UserModal modalData={modalData}/>
            case MODAL_TYPES.INFO_MODAL: 
                return <InfoModal modalData={modalData}/>
            default: 
                return null;
        }
    }
  
    
    return (
        isModalOpen &&
        <div>
          <Dialog
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {openModalByType()}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleOnConfirm} autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
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