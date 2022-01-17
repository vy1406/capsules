import React from 'react';
import Day from '../day/Day';
import './style.scss'
import { getRandomColor } from '../../utils/utils';
import DayNavigation from '../day-navigation/DayNavigation';

export default function TeamCapsules() {
    const WEEK = [0,1,2,3,4];
    const WEEK_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

    const capsula_a = [
        {username: 'udi', color: getRandomColor()},
        {username: 'moshe' , color: getRandomColor() },
        {username: 'stav', color: getRandomColor()}
    ]

    const capsula_b = [
        {username: 'vova', color: getRandomColor()},
        {username: 'saar', color: getRandomColor()},
        {username: 'noa', color: getRandomColor()}
    ]

    return (
        <div className="userCapsulesWrap">
            <DayNavigation />
            {WEEK.map((dayIndex) => (
                <Day
                    key={dayIndex}
                    dayIndex={dayIndex}
                    dayName={WEEK_NAMES[dayIndex]}
                    users={dayIndex % 2 === 0 ? capsula_a : capsula_b}
                />
            ))}
        </div>
    );
}