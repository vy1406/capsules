import MultipleSelectCheckmarks from '../search-bar/SearchBar';
import React, { useState, useEffect } from 'react';
import './style.scss'
import Day from '../day/Day';
import { connect } from 'react-redux';
import DayNavigation from '../day-navigation/DayNavigation';
import { addDaysToDate, getLastSunday, isEmpty, clientToServeDate } from '../../utils/utils';

import { WEEK_NAMES, WEEK } from '../../utils/constants';

const TeamCapsules = ( { teamRoasters, userTeammates }) => {
    const now = new Date()
    const [closestSunday, setClosestSunday] = useState(getLastSunday(now))
    const [endDate, setEndDate] = useState(addDaysToDate(now, 5))
    const [weekRoaster, setWeekRoaster] = useState([])
    const [dropDownUsers, setDropDownUsers] = useState(teamRoasters)
    
    useEffect(() => {
        buildWeek(closestSunday)
        setDropDownUsers(usersToListItem(userTeammates))
    }, [teamRoasters, userTeammates])

    const usersToListItem = (users) => users.map(user => user.username)
    
    const findByDate = (dateToSearchBy) => 
        teamRoasters.find(( roaster => roaster.date === clientToServeDate(dateToSearchBy)))
    

    const buildWeek = (startDate) => {
        if ( isEmpty(teamRoasters) ) return []
        const weekRoaster = []
        WEEK.map((week, index) => {
            const found = findByDate(addDaysToDate(startDate, index))
            if ( found ) weekRoaster.push(found)
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
   
    const handleOnCloseDropDown = (arrNames) => {
        const foundUsers = []
        arrNames.map(name => {
            const found = userTeammates.find(user => user.username === name)
            foundUsers.push(found)
        })
        setDropDownUsers(usersToListItem(foundUsers))
    }

    const roasterAndDropDownUsers = (roasterUsers) => {
        const usersToShow = []
        roasterUsers.map(roasterUser => {
            const foundUser = dropDownUsers.find(ddUser => ddUser === roasterUser.username)
            if (foundUser) usersToShow.push(roasterUser)
        })
  
        return usersToShow
    }

    return (
        <div className="userCapsulesWrap">
            <DayNavigation setStartEndDate={handleOnSetEndDate} />
            <MultipleSelectCheckmarks
                items={usersToListItem(userTeammates)}
                onCloseDropDown={handleOnCloseDropDown}
            />
            {weekRoaster.map((roaster, dayIndex) => (
                <Day
                    key={dayIndex}
                    dayName={WEEK_NAMES[dayIndex]}
                    users={roasterAndDropDownUsers(roaster.users)}
                    date={roaster.date}
                />
            ))}
        </div>
    );
}

const mapDispatchToProps = {};
  
const mapStateToProps = state => ({
    teamRoasters: state.globalReducer.teamRoasters,
    userTeammates: state.globalReducer.userTeammates,
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamCapsules);