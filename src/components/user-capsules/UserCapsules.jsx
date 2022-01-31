import React, { useState, useEffect } from 'react';
import './style.scss'
import Day from '../day/Day';
import { connect } from 'react-redux';
import DayNavigation from '../day-navigation/DayNavigation';
import { addDaysToDate, getLastSunday, isEmpty, isSameDate, clientToServeDate, serverToClientDate } from '../../utils/utils';
import { WEEK_NAMES, EMPTY_ROASTER, WEEK } from '../../utils/constants';


const UserCapsules = ({ userRoasters, loggedUser }) => {
    const now = new Date()
    const [closestSunday, setClosestSunday] = useState(getLastSunday(now))
    const [endDate, setEndDate] = useState(addDaysToDate(now, 5))
    const [weekRoaster, setWeekRoaster] = useState([])

    useEffect(() => {
        buildWeek(closestSunday)
    }, [userRoasters])

    const findByDate = (dateToSearchBy) => {
        const found = userRoasters.find(( roaster => roaster.date === clientToServeDate(dateToSearchBy)))
        return found
    }

    const buildWeek = (startDate) => {
        if ( isEmpty(userRoasters) ) return []
        const weekRoaster = []
        WEEK.map((week, index) => {
            const found = findByDate(addDaysToDate(startDate, index))
            if ( found ) {
                weekRoaster.push(found)
            }
            else {
                const dateToAdd = clientToServeDate(addDaysToDate(startDate, index))
                weekRoaster.push({ date: dateToAdd, users: []})
            }
        })
        setWeekRoaster(weekRoaster)
    }

    const handleOnSetEndDate = (newStartDate, newEndDate) => {
        setClosestSunday(newStartDate)
        setEndDate(newEndDate)
        buildWeek(newStartDate)
    }

    const getOnlyLoginUser = (roaster) => {
        const foundUser = roaster.users.find( user => loggedUser.id === user._id)
        return foundUser ? [foundUser] : []
    }
    
    return (
        <div className="userCapsulesWrap">
            <DayNavigation 
                setStartEndDate={handleOnSetEndDate}
            />
            {weekRoaster.map((roaster, dayIndex) => (
                <Day
                    key={dayIndex}
                    dayName={WEEK_NAMES[dayIndex]}
                    users={getOnlyLoginUser(roaster)}
                    date={roaster.date}
                />
            ))}
        </div>
    );
}

const mapDispatchToProps = { };
  
const mapStateToProps = state => ({
    userRoasters: state.globalReducer.userRoasters,
    loggedUser: state.globalReducer.loggedUser,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCapsules);