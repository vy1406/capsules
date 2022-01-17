import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { getLastSunday, addDaysToDate, subDaysFromDate } from '../../utils/utils';
import DateUI from '../../common/date/DateUI'
import './style.scss'


export default function DayNavigation() {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        const now = new Date()
        setStartDate(getLastSunday(now))
        setEndDate(addDaysToDate(getLastSunday(now)))
    }, []) 

    const onNextDate = () => {
        setStartDate(addDaysToDate(startDate))
        setEndDate(addDaysToDate(endDate))
    }

    const onPrevDate = () => {
        setStartDate(subDaysFromDate(startDate))
        setEndDate(subDaysFromDate(endDate))
    }

    return (
        <>
        <div className="datesWrap">            
            {startDate && <DateUI date={startDate}/>}
            {endDate && <DateUI date={subDaysFromDate(endDate,1)}/>}
        </div>
        <div className="dayNavigationWrap">
            <Button
                variant="contained"
                onClick={onPrevDate}>
                Previous Week
            </Button>

            <Button
                variant="contained"
                onClick={onNextDate}>
                Next Week
            </Button>
        </div>
        </>
    );
}