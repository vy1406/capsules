import React, {useState, useEffect} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { MODAL_TYPES } from '../modals/constants';
import { connect } from "react-redux";
import {
    setModalData,
    setModalType,
    toggleModal,
    addDates,
} from '../../store/actions';
import 'react-day-picker/lib/style.css';
import './style.scss'
import { serverToClientDate, clientToServeDate } from '../../utils/utils';

const CalendarPage = ({ 
    toggleModal,
    setModalData,
    setModalType,
    roasters,
    addDates
}) => {
    const [selectedDates, setSelectedDates] = useState([])
    const [originalDates, setOriginalDates] = useState([])
  
    useEffect(() => {
        const onlyDates = roasters.map(roaster => serverToClientDate(roaster.date))
        setSelectedDates(onlyDates)
        setOriginalDates(roasters.map(roaster => roaster.date))
    }, [roasters])

    const handleDayClick = (day, { selected }) => {
        let timedZero = new Date(day)
        timedZero.setHours(0,0,0,0)
        const newSelectedDays = selectedDates.concat();
        if (selected) {
            const selectedIndex = newSelectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, timedZero)
            );
            newSelectedDays.splice(selectedIndex, 1);
        } else {
            newSelectedDays.push(timedZero);
        }
        setSelectedDates(newSelectedDays);
    }

    const getDatesToRemoveAndAdd = () => {
        const stringDates = selectedDates.map(date => clientToServeDate(date))
        let datesToRemove = originalDates.filter(x => !stringDates.includes(x))                                      ;    
        let datesToAdd = stringDates.filter(x => !originalDates.includes(x))                               
        return {
            datesToRemove,
            datesToAdd
        }
    }

    const handleOnUpdateDates = () => {
        setModalType(MODAL_TYPES.INFO_MODAL)
        toggleModal(true)
        setModalData({
          title: "Double check...",
          text: "Sure about the dates ?",
          onConfirmCallback: () => addDates(getDatesToRemoveAndAdd()),
        //   onConfirmCallback: () => console.log(getDatesToRemoveAndAdd()),
        })
      }

    return (
        <div className="calendarPageWrap">
            <DayPicker
                selectedDays={selectedDates}
                onDayClick={handleDayClick}
            />

            <Box className="boxClassName">
                <Button
                    variant="contained"
                    onClick={handleOnUpdateDates}>
                    Update Dates
                </Button>
            </Box>
        </div>
    );

    
}

/*

 TODO: 
 - pull roasters to calendar by user. ( filter roasters by user_id)
 because it removes but u still showing all the roasters of the whle team... 
 
*/
const mapDispatchToProps = {
    toggleModal,
    setModalData,
    setModalType,
    addDates,
};
  
const mapStateToProps = state => ({
    loggedUser: state.globalReducer.loggedUser,
    roasters: state.globalReducer.userRoasters
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPage);