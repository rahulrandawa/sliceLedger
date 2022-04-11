import React,{useState,useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../common/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye, faShieldVirus} from '@fortawesome/free-solid-svg-icons'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

export default function ChangePwd() {
  const showNav = useContext(myContext)

  // =======password hide show on toggle icon function =========
  const [togglePwdOld, setTogglePwdOld] = useState(false)
  const [togglePwdNew, setTogglePwdNew] = useState(false)
  const [togglePwdConfirm, setTogglePwdConfirm] = useState(false)

  const [passwordShownOld, setPasswordShownOld] = useState(false);
  const [passwordShownNew, setPasswordShownNew] = useState(false);
  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);

  const handleCheckPasswordOld =()=>{
      setTogglePwdOld(!togglePwdOld)
      setPasswordShownOld(!passwordShownOld)
  }
  const handleCheckPasswordNew =()=>{
    setTogglePwdNew(!togglePwdNew)
    setPasswordShownNew(!passwordShownNew)
  }
  const handleCheckPasswordConfirm =()=>{
    setTogglePwdConfirm(!togglePwdConfirm)
    setPasswordShownConfirm(!passwordShownConfirm)
}
// =======password hide show on toggle icon function =========

  return (
    <>

      <Header/>
    <div className="main-section d-flex">
    <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar/>
                </div>
      <section className='slice_user_change_pwd' style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={6} md={6}>
              <div className="change_pwd_form">
              <div className="head">
                  <h4>Change Password</h4>
              </div>
              <div className="text">
                <p>Enter a new password for your CoinDCX account below</p>
              </div>
              <div className="change_pwd_inputs">
               <div className="old_pwd_div">
               <input type={passwordShownOld ? "text" : "password"} placeholder='Old Password' />
                                    <div className="icon" onClick={handleCheckPasswordOld}>
                                    <FontAwesomeIcon icon={togglePwdOld ? faEye : faEyeSlash} />
                                    </div>
               </div>
              <div className="new_pwd_div">
              <input type={passwordShownNew ? "text" : "password"} placeholder='New Password' />
                                    <div className="icon" onClick={handleCheckPasswordNew}>
                                    <FontAwesomeIcon icon={togglePwdNew ? faEye : faEyeSlash} />
                                    </div>
              </div>
               <div className="confirm_new_pwd_div">
               <input type={passwordShownConfirm ? "text" : "password"} placeholder='Confirm New Password' />
                                    <div className="icon" onClick={handleCheckPasswordConfirm}>
                                    <FontAwesomeIcon icon={togglePwdConfirm ? faEye : faEyeSlash} />
                                    </div>
               </div>
                <div className="change_pwd_text_msg">
                  <div className="icon">
                  <FontAwesomeIcon icon={faShieldVirus} />
                  </div>
                  <p>For Security reasons, Withdrawals will be paused for 24 hours after changing your password</p>
                </div>
                <div className='user_changePwd_Btn'>
                    <button className='pwd_btn'>Change Password</button>
                </div>
              </div>
              </div>
             
            </Col>
          </Row>
        </Container>
      </section>
    </div>
 
    </>
  )
}
