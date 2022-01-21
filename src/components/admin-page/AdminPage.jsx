import React, {useState} from 'react';
import './style.scss'
import EditUser from './edit-user/EditUser';
import AddUser from './add-user/AddUser';
import { connect } from "react-redux";
import { MODAL_TYPES } from '../modals/constants';
import { setModalData, setModalType, toggleModal  } from '../../store/actions';
import CustomRadioButton from '../../common/radio/CustomRadio';
import { ADMIN_RADIO_BUTTONS, RADIO_BUTTONS } from '../../utils/constants';
import NewTeam from './new-team/NewTeam';

const AdminPage = ( {
  toggleModal,
  setModalData,
  setModalType
}) => {
    const [radioButtonValue, setRadioButtonValue] = useState(RADIO_BUTTONS.EDIT_USER);

    const handleOnClick = (radioButtonValue) => {
        setRadioButtonValue(radioButtonValue);
    };

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
          return <EditUser onDeleteUser={onDeleteUser} />
        case RADIO_BUTTONS.NEW_USER:
          return <AddUser/>
        case RADIO_BUTTONS.NEW_TEAM:
          return <NewTeam />
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
};

const mapStateToProps = state => ({

});

export default connect(
mapStateToProps,
mapDispatchToProps
)(AdminPage);