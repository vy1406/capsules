import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getRandomColor } from '../../../utils/utils';
import './style.scss'

const UserModal = ({
  style
}) => {
    const [color, setColor] = useState("aqua")

    const handleOnGenerateNewColor = () => {
        setColor(getRandomColor())
    }

    const handleOnSave = () => {
        console.log(color)
    }
    
    
    return (
        <div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Generate New Color:
        </Typography>
        <div className="generatedColor" style={{ backgroundColor: color}}></div>
        <Button
            variant="contained"
            onClick={handleOnGenerateNewColor}>
            !!!
        </Button>

        <Button
            variant="contained"
            onClick={handleOnSave}>
            Save Changes
        </Button>
        </div>
         
    );
}


export default UserModal