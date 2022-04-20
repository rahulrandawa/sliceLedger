import React, {useState, useContext} from 'react'
import { Container, Navbar, Nav, NavDropdown, Image , Row, Col} from "react-bootstrap"
import { Link,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faArrowRightFromBracket,faBarsStaggered, faXmark} from '@fortawesome/free-solid-svg-icons'
import {faUser, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import profilePic from '../../assets/images/member.png'
import myContext from '../../context/MyContext'
import { decryptData } from '../../Helper'

export default function Header(props) {
    const [toggleProfile_card, setToggleProfile_card] = useState(false);
    let History = useNavigate();
     const accessToken =  localStorage.getItem('accessToken')
    // console.log(accessToken);
    function toggleProfile(params) {
        setToggleProfile_card(!toggleProfile_card)
    }
  const showNav = useContext(myContext)
    // console.log("first", first.count);
    // console.log("header",showNav.navOpen);

    const toggleNav = ()=>{
        showNav.setNavOpen(!showNav.navOpen)
     }
   
    // =======================Logout Api Call=====================================
  function logout() {
     fetch("https://bharattoken.org/sliceLedger/admin/api/auth/logout", {
         "method": "GET",
         "headers": {
             "content-type": "application/json",
             "accept": "application/json",
             Authorization: accessToken
         },
        })
       .then(response => response.json())
       .then(response => {
         const res  = decryptData(response)
         localStorage.removeItem('accessToken');
         localStorage.clear();
         sessionStorage.clear()
         History('/login');
         })
        .catch(err => {
            console.log(err);
            localStorage.removeItem('accessToken');
            localStorage.clear();
            sessionStorage.clear()
            History('/login');
        });
 }
 // ===============================End Logout Api Call ========================================
    return (
        <>
            <header className='slice_dash_header d-none'>
                <Navbar expand="lg" className='slice_Nav' >
                    <Container fluid>
                        <Navbar.Brand href="#">SliceLedger</Navbar.Brand>
                        <div className="toggle" onClick={props.click}><FontAwesomeIcon icon={faBarsStaggered}/></div>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                            <Nav
                                className='slice_link_div'
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <div className=' slice_navLink profile_pic_link' onClick={toggleProfile}>
                                    <Image src={profilePic} fluid />
                                    <div className='profile_card' style={toggleProfile_card ? {display:"block"} : {display:"none"}}>
                                        <div className='profile_card_top'>
                                            <Image src={profilePic} fluid />
                                            <h5>James Wan</h5>
                                            <em>james@gmail.com</em>
                                        </div>
                                        <div className='profile_card_bottom '>
                                            <ul>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faUser}/></div>
                                                        <div className='title'><Link to='/user_profile'>My Profile</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faPenToSquare}/></div>
                                                        <div className='title'><Link to='/'>Edit Profile</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faSliders}/></div>
                                                        <div className='title'><Link to="/user_account_setting">Account Setting</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faArrowRightFromBracket}/></div>
                                                        <div className='title' onClick={logout}>logOut</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <header className='slice_dash_header'>
                <div className='slice_Nav'>
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                               <div className="nav-bar">
                               <div className="logo">
                                    <div className="brand_logo"><h5>SliceLedger</h5></div>
                                    <div className="toggle" onClick={toggleNav}><FontAwesomeIcon icon={showNav.navOpen ? faBarsStaggered : faXmark}/></div>
                                </div>
                                <div className=' slice_navLink profile_pic_link' onClick={toggleProfile}>
                                    <Image src={profilePic} fluid />
                                    <div className='profile_card' style={toggleProfile_card ? {display:"block"} : {display:"none"}}>
                                        <div className='profile_card_top'>
                                            <Image src={profilePic} fluid />
                                            <h5>James Wan</h5>
                                            <em>james@gmail.com</em>
                                        </div>
                                        <div className='profile_card_bottom '>
                                            <ul>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faUser}/></div>
                                                        <div className='title'><Link to='/user_profile'>My Profile</Link></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faPenToSquare}/></div>
                                                        <div className='title'><Link to='/edit_user_profile'>Edit Profile</Link></div>
                                                    </div>
                                                </li>
                                                {/* <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faSliders}/></div>
                                                        <div className='title'><Link to="/user_account_setting">Account Setting</Link></div>
                                                    </div>
                                                </li> */}
                                                <li>
                                                    <div className='menu'>
                                                        <div><FontAwesomeIcon icon={faArrowRightFromBracket}/></div>
                                                        <div className='title' onClick={logout}>logOut</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                               </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </header>

     
        </>
    )
}