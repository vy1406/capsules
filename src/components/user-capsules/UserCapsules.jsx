import React, { useState, useEffect } from 'react';
import './style.scss'
import Day from '../day/Day';
import { connect } from 'react-redux';
import DayNavigation from '../day-navigation/DayNavigation';
import { addDaysToDate, getLastSunday, isEmpty, isSameDate } from '../../utils/utils';
import { WEEK_NAMES, EMPTY_ROASTER, WEEK } from '../../utils/constants';

const UserCapsules = ({ userData }) => {
    const now = new Date()
    const [closestSunday, setClosestSunday] = useState(getLastSunday(now))
    const [endDate, setEndDate] = useState(addDaysToDate(now, 5))
    const [weekRoaster, setWeekRoaster] = useState([])

    const findByDate = (dateToSearchBy) => {
        const found = userData.roasters.find(( roaster => 
            isSameDate(roaster.date,dateToSearchBy)
        ))
        return found
    }

    const buildWeek = (startDate) => {
        if ( isEmpty(userData.roasters) ) return []
        const weekRoaster = []
        WEEK.map((week, index) => {
            const found = findByDate(addDaysToDate(startDate, index))
            if ( found ) weekRoaster.push(found)
            else weekRoaster.push(EMPTY_ROASTER)
        })
        setWeekRoaster(weekRoaster)
    }

    useEffect(() => {
        buildWeek(closestSunday)
    }, [])


    const handleOnSetEndDate = (newStartDate, newEndDate) => {
        setClosestSunday(newStartDate)
        setEndDate(newEndDate)
        buildWeek(newStartDate)
    }

    const getOnlyLoginUser = (roaster) => {
        const foundUser = roaster.users.find( user => userData.user.id === user.id)
        if ( foundUser ) return [foundUser]
        return []
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

const mapDispatchToProps = {
    // getUserData,
  };
  
  const mapStateToProps = state => ({
    userData: state.globalReducer.userData,
    // modalType: state.globalReducer.modalType,
    // isModalOpen: state.globalReducer.isModalOpen,
    // modalData: state.globalReducer.modalData
  });
  
  export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserCapsules);