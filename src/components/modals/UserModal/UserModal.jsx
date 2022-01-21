import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getRandomColor } from '../../../utils/utils';
import { DialogTitle, DialogContent } from '@mui/material';
import './style.scss'

const UserModal = ({
    modalData
}) => {
    const [color, setColor] = useState("aqua")

    const handleOnGenerateNewColor = () => {
        setColor(getRandomColor())
    }

    const handleOnSave = () => {
        console.log(color)
    }
    
    
    return (
        <Fragment>
            <DialogTitle id="alert-dialog-title">
                {modalData.title}
            </DialogTitle>
            <DialogContent>
                <Box className="generateColorWrap">
                    <div className="generatedColor" style={{ backgroundColor: color}}></div>
                    <Button
                        variant="contained"
                        onClick={handleOnGenerateNewColor}>
                        Go!
                    </Button>
                </Box>
            </DialogContent>
        </Fragment>          
    );
}


export default UserModal