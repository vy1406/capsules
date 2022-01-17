import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import './style.scss'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Day({dayIndex, dayName, users}) {
  return (
    <Card
      className="dayWrap"
      >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Day {bull} {dayIndex} {bull} {dayName}
        </Typography>
        <Typography variant="h5" component="div">
        {users.map((user, index) => (
          <Chip
            key={user.username + index}
            label={user.username}
            variant="outlined"
            className="chip"
            style={{backgroundColor: user.color}}
        />
        ))}
        </Typography> 
       
      </CardContent>
    </Card>
  );
}
