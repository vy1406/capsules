import React from 'react';
import './style.scss'
import Day from '../day/Day';
import { getRandomColor } from '../../utils/utils';
import DayNavigation from '../day-navigation/DayNavigation';

export default function UserCapsules() {

    const WEEK = [0,1,2,3,4];
    const WEEK_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
    const loginUser = { username: 'vovo', color: getRandomColor()}
    return (
        <div className="userCapsulesWrap">
            <DayNavigation />
            {WEEK.map((dayIndex) => (
                <Day
                    key={dayIndex}
                    dayIndex={dayIndex}
                    dayName={WEEK_NAMES[dayIndex]}
                    users={dayIndex % 2 === 0 ? [loginUser] : []}
                />
            ))}
        </div>
    );
}