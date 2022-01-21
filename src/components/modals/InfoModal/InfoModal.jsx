import React, { Fragment } from 'react';

import { DialogTitle, DialogContent } from '@mui/material';
import './style.scss'

const InfoModal = ({
  modalData
}) => {

    return (
        <Fragment>
            <DialogTitle id="alert-dialog-title">
                {modalData.title}
            </DialogTitle>
            <DialogContent>
                {modalData.text}
            </DialogContent>
        </Fragment>
    );
}


export default InfoModal