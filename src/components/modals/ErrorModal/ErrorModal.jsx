import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { DialogTitle, DialogContent } from '@mui/material';
import { setModalData, setIsError } from '../../../store/actions';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';

const DEFAULT_ERROR_DATA = {
    title: 'Oops! :(',
    text: 'Something failed successfully... '
}
const ErrorModal = ({
  modalData = DEFAULT_ERROR_DATA,
  isError,
  setModalData,
  setIsError,
}) => {

    const handleOnClose = () => {
        setModalData(null)
        setIsError(false)
    }

      return (
        <div>
          <Dialog
            open={isError}
            onClose={handleOnClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                {modalData.title}
            </DialogTitle>
            <DialogContent>
                {modalData.text}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOnClose} autoFocus>
                Ok ?
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

const mapDispatchToProps = {
    setModalData,
    setIsError,
};
  
const mapStateToProps = state => ({
  isError: state.globalReducer.isError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);