import React, {useState, useEffect} from 'react';
import './style.scss'
import EditUser from './edit-user/EditUser';
import AddUser from './add-user/AddUser';
import { connect } from "react-redux";
import { MODAL_TYPES } from '../modals/constants';
import CustomRadioButton from '../../common/radio/CustomRadio';
import { ADMIN_RADIO_BUTTONS, RADIO_BUTTONS } from '../../utils/constants';
import NewTeam from './new-team/NewTeam';
import {
  setModalData,
  setModalType,
  toggleModal,
  addNewUser,
  getTeams,
  addNewTeam,
  getUsers
} from '../../store/actions';

const AdminPage = ( {
  toggleModal,
  setModalData,
  addNewUser,
  addNewTeam,
  getTeams,
  getUsers,
  setModalType,
  teams,
  users,
}) => {
    const [radioButtonValue, setRadioButtonValue] = useState(RADIO_BUTTONS.EDIT_USER);

    useEffect(() => {
      getTeams()
      getUsers()
    }, [])

    useEffect(() => {
      console.log(users)
      console.log(teams)
    }, [])
    const handleOnClick = (radioButtonValue) => {
        setRadioButtonValue(radioButtonValue);
    };

    const onAddTeam = (team) => {
      setModalType(MODAL_TYPES.INFO_MODAL)
      toggleModal(true)
      setModalData({
        title: "Double check...",
        text: "Sure about the team name ? ",
        onConfirmCallback: () => addNewTeam(team),
      })
    }
    
    const onAddUser = (user) => {
      setModalType(MODAL_TYPES.INFO_MODAL)
      toggleModal(true)
      setModalData({
        title: "Double check...",
        text: "You sure ?",
        onConfirmCallback: () => addNewUser(user),
      })
    }

    const onDeleteUser = (userId) => {
      setModalType(MODAL_TYPES.INFO_MODAL)
      toggleModal(true)
      setModalData({
        title: "Attention!",
        text: "The use will be initialized..."
      })
      console.log(userId) 
    }

    const renderContent = () => {
      switch(radioButtonValue) {
        case RADIO_BUTTONS.EDIT_USER:
          return <EditUser onDeleteUser={onDeleteUser} users={users}/>
        case RADIO_BUTTONS.NEW_USER:
          return <AddUser onAddUser={onAddUser} teams={teams}/>
        case RADIO_BUTTONS.NEW_TEAM:
          return <NewTeam onAddTeam={onAddTeam}/>
      }
    }

    return (
        <div className="userCapsulesWrap">
            <CustomRadioButton
                defaultValue={RADIO_BUTTONS.EDIT_USER}
                radioButtons={ADMIN_RADIO_BUTTONS}
                handleOnRadioButton={handleOnClick}
            />
            {renderContent()}
        </div>
    );
}


const mapDispatchToProps = {
  toggleModal,
  setModalData,
  setModalType,
  addNewUser,
  addNewTeam,
  getTeams,
  getUsers,
};

const mapStateToProps = state => ({
  teams: state.globalReducer.teams,
  users: state.globalReducer.users,
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(AdminPage);