import React, {useState} from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import img from "../image/logo.png"
import { useDispatch } from 'react-redux'
import {faUserTie, faMessage,faUsersRays,faMapLocationDot,faRightToBracket} from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {logoutResetDetails} from '../redux/actions/userAction'

const NavBar =() => {
  const dispatch = useDispatch()
  const triggerLogout = () => {
    dispatch(logoutResetDetails())
}
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: 'Privacy',
      key: '1',
    },
    {
      label: 'Setting',
      key: '2',
    },
    {
      label: 'Logout',
      key: '3',
  
    },
  ];
  return(
    <div className="nav-bar">
    <div className="logo">
      <img src= {img} alt="Logo" width={400} height={400}/>
      </div>
      <div className="midnav-icons">
      <div><FontAwesomeIcon icon={faMessage} />  </div>
      <div><FontAwesomeIcon icon={faUsersRays} />  </div>
      <div><FontAwesomeIcon icon={faMapLocationDot} />  </div>
      <div><FontAwesomeIcon icon={faRightToBracket} />  </div>
      </div>
      
      <div className="rightside-icon">
      <div><FontAwesomeIcon icon={faUserTie} /> </div>
     <Dropdown
       menu={{
       items,
       onClick: handleMenuClick,
     }}
     onOpenChange={handleOpenChange}
     open={open}
   >
     <a onClick={(e) => e.preventDefault()}>
       <Space>
         <DownOutlined />
       </Space>
     </a>
   </Dropdown>
   </div>
    </div>
  )
    }
  
export default NavBar