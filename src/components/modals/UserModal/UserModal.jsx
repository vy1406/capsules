import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getRandomColor } from '../../../utils/utils';
import { DialogTitle, DialogContent, TextField } from '@mui/material';
import './style.scss'

const UserModal = ({
    modalData,
    userColor,
    setUserColor
}) => {
    const [color, setColor] = useState(userColor)

    const handleOnGenerateNewColor = () => {
        const randomColor = getRandomColor()
        setColor(randomColor)
        setUserColor(randomColor)
    }
    
    const handleOnChange = (value) => {
        setColor(value)
        setUserColor(value)
    }
    
    return (
        <Fragment>
            <DialogTitle id="alert-dialog-title">
                {modalData.title}
            </DialogTitle>
            <DialogContent>
                <Box className="generateColorWrap">
                    <div className="generatedColor" style={{ backgroundColor: color}}></div>
                    <TextField
                            id="standard-basic"
                            label="Color"
                            className="colorInput"
                            value={color}
                            variant="standard"
                            onChange={(e) => handleOnChange(e.target.value)}
                        />
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