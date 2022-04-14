import React, { useContext } from 'react'
import { Link,useLocation,useNavigate  } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../common/Header'
import { decryptData } from '../../Helper'
import { toast } from 'react-toastify'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

const DisableAccount = () => {
    const showNav = useContext(myContext)
    const History = useNavigate()
    const accessToken =  localStorage.getItem('accessToken')

// =======================Logout Api Call=====================================
function disable() {
    fetch("https://bharattoken.org/sliceLedger/admin/api/auth/disable", {
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
      "Authorization": accessToken
    }
  })
  .then(response => response.json())
  .then(response => {
    const res  = decryptData(response);
    if (parseInt(res.status) == 200) { 
        localStorage.removeItem('accessToken');
        localStorage.clear();
        sessionStorage.clear()
        toast.success(res.message)
        History('/login'); 
    }else{
        toast.error(res.message)
    }

  })
  .catch(err => {
    console.log(err);
  });
}
// ===============================End Logout Api Call ========================================

    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>

                <div className="disable_account_section" style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <div className="disable_account_div">
                                    <div className="disable_head">
                                        <h5>Suspicious activity?</h5>
                                    </div>
                                    <div className="disable_text">
                                        <div className="title">
                                            <p>Please disable your account to secure your funds.</p>
                                            <p>Lorem ipsum dolor sit amet. Vel voluptatem itaque non tenetur nisi in esse dolores eum ducimus odit a voluptatem harum qui sint sapiente sit ducimus minima. Et ducimus odit a autem animi id omnis doloribus.</p>
                                        </div>
                                    </div>
                                    <div className="disable_btn">
                                        <button className='btn btn-danger' onClick={disable}>Disable Your Account</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default DisableAccount