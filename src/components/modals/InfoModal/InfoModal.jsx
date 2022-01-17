import React from 'react';

import Typography from '@mui/material/Typography';
import './style.scss'

const InfoModal = ({
  modalData
}) => {

    return (
       <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalData.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData.text}
            </Typography>
       </div>
    );
}


export default InfoModal