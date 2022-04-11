import React, { useState,useContext } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'

export default function UserKYCVerification() {
  const showNav = useContext(myContext)

  const [document, setDocument] = useState("")
  const [selectedDoc, setSelectedDoc] = useState(false)
  const [backImageFile, setBackImageFile] = useState(true)

  const [frontFile, setFrontFile] = React.useState("");
  const [backFile, setBackFile] = React.useState("");
  const [selfieFile, setSelfieFile] = React.useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectDocFile = (e) => {
    setDocument(e.target.value)
    setSelectedDoc(true)
    if(e.target.value === "Pan Card"){
      setBackImageFile(false)
    }else{
      setBackImageFile(true)
    }
  
  }


  function handleUploadFront(event) {
    setFrontFile(event.target.files[0].name);
    //  console.log(event.target.files[0].name)

  }

  function handleUploadBack(event) {
    setBackFile(event.target.files[0].name);
    // console.log(event.target.files[0].name)
  }

  function handleUploadSelfie(event) {
    setSelfieFile(event.target.files[0].name);
    // console.log(event.target.files[0].name)
  }



 


  return (

    <>
      <Header />
      <div className="main-section d-flex">
        <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
          <SideNavbar />
        </div>
        <section className='slice_user_kyc_verification' style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }} >
          <Container>
            <Row className='justify-content-center'>
              <Col lg={8} md={12}>
                <div className="kyc_verification_div">
                  <div className="head">
                    <div>Scan Your ID/Password Number</div>
                  </div>

                  <div className="kyc_verification_fields">
                    <div className="select_document_div">
                      <select  onChange={selectDocFile} id="select">
                        <option value="">Select Your Document </option>
                        <option value="Aadhar Card">Aadhar Card</option>
                        <option value="Pan Card">Pan Card</option>

                      </select>
                    
                    </div>
                    {selectedDoc ? <div className="selected_document_div">
                      <input type="text" placeholder={`Enter ${document} Number`} />
                    </div>
                      : " "}


                    <div className="upload_document_div">
                      <div className="head">
                        <div>Upload Your ID/Password</div>
                      </div>
                      <div className="upload_file mt-2">
                        <div className="front_image">
                          <p>Front</p>
                          <div className="front">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleUploadFront} />

                          </div>
                          {/* <p>{frontFile}</p> */}
                        </div>

                     {backImageFile ?  <div className="back_image" id="back_images">
                          <p>Back</p>
                          <div className="back">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleUploadBack} />
                          </div>
                          {/* <p>{backFile}</p> */}
                        </div> : " "}

                        <div className="selfie_image">
                          <p>Selfie</p>
                          <div className="selfie">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload" type="file" style={{ display: "none" }} onChange={handleUploadSelfie} />
                          </div>
                          {/* <p>{selfieFile}</p>  */}
                        </div>

                      </div>
                    </div>

                    <div className="warning_msg">
                      <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                      <p>Upload your selfie with current date and signature on blank page</p>
                    </div>
                    <div className="kyc_verification_btn">
                      <button className='done_btn' onClick={handleShow}>Done</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* ===============successful modal start================== */}
          <Modal show={show} onHide={handleClose}>

            <Modal.Body>
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    <div className="success_msg_div">
                      <div className="icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                      <h5>Congratulations Your KYC Approved</h5>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>

          </Modal>
          {/* ===============successful modal end================== */}
        </section>
      </div>




    </>
  )
}

