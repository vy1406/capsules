import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { getLastSunday, addDaysToDate, subDaysFromDate } from '../../utils/utils';
import DateUI from '../../common/date/DateUI'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.scss'


export default function DayNavigation({
    setStartEndDate,
}) {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        const now = new Date()
        setStartDate(getLastSunday(now))
        setEndDate(addDaysToDate(getLastSunday(now)))
    }, []) 

    const onNextDate = () => {
        const newStartDate = addDaysToDate(startDate)
        const newEndDate = addDaysToDate(endDate)
        setStartDate(newStartDate)
        setEndDate(newEndDate)
        setStartEndDate(newStartDate, newEndDate)
    }

    const onPrevDate = () => {
        const newStartDate = subDaysFromDate(startDate)
        const newEndDate = subDaysFromDate(endDate)
        setStartDate(newStartDate)
        setEndDate(newEndDate)
        setStartEndDate(newStartDate, newEndDate)
    }

    return (
        <>
        {startDate && endDate &&
         <div className="datesWrap">        
            <Box className="dateIconWrap" onClick={onPrevDate}>
                <ArrowBackIosIcon color="primary" />
                <DateUI date={startDate}/>
            </Box>
            <Box className="dateIconWrap" onClick={onNextDate}>
                <DateUI date={subDaysFromDate(endDate,1)}/>
                <ArrowForwardIosIcon color="primary"/>
            </Box>
        </div>
        }      
        </>
    );
}