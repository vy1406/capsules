import React, {useState} from 'react';
import './style.scss'
import EditUser from './edit-user/EditUser';
import AddUser from './add-user/AddUser';
import { connect } from "react-redux";
import CustomSwitch from '../../common/switch/CustomSwitch';
import { MODAL_TYPES } from '../modals/constants';
import { setModalData, setModalType, toggleModal  } from '../../store/actions';

const AdminPage = ( {
  toggleModal,
  setModalData,
  setModalType
}) => {
    const [checked, setChecked] = useState(true);

    const handleOnClick = (checked) => {
        setChecked(checked);
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

    return (
        <div className="userCapsulesWrap">
            <CustomSwitch
              leftLabel="Edit User"
              rightLabel="New User"
              handleOnSwitch={handleOnClick}
            />
            {checked ?
              <AddUser />
              :
              <EditUser 
                onDeleteUser={onDeleteUser}
            />}
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