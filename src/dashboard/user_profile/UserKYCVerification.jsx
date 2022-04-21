import React, { useState,useContext,useEffect } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'
import { decryptData } from '../../Helper'
import { toast } from 'react-toastify'
import axios from 'axios'
import validate from '../../validation/KycApprove'
import { KycApproveForm } from '../../Form'


export default function UserKYCVerification() {
  const showNav = useContext(myContext)
  
  const accessToken =  localStorage.getItem('accessToken')
  // console.log(accessToken);
  const [document, setDocument] = useState("")
  const [selectedDoc, setSelectedDoc] = useState(false)
  const [backImageFile, setBackImageFile] = useState(true)

  const [docType, setSelectDocs] = useState("")
  const [frontFile, setFrontFile] = useState();
  const [backFile, setBackFile] = useState();
  const [selfieFile, setSelfieFile] = useState();
  
  const [preFront, setFrontPreview] = useState();
  const [preBack, setBackPreview] = useState();
  const [preSelfie, setSelfiePreview] = useState();

 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectDocFile = (e) => {
    setDocument(e.target.value)
    setSelectedDoc(true)
    if(e.target.value === "pan"){
      setBackImageFile(false)
    }else{
      setBackImageFile(true)
    }
  
  }

      
async function KycApprove (){
 
  const formData = new FormData();
  if(docType === "adhar"){
    formData.append("front_doc", frontFile,frontFile.name);
    formData.append("back_doc", backFile,backFile.name);
    formData.append("selfie", selfieFile,selfieFile.name);
    formData.append("doc_type", docType);
  }else{
    formData.append("front_doc", frontFile,frontFile.name);
    formData.append("selfie", selfieFile,selfieFile.name);
    formData.append("doc_type", docType);
  }
 
 await  axios.post("https://bharattoken.org/sliceLedger/admin/api/auth/kyc",formData, {
        "method": "POST",
        "mode":'cors',
        "headers": {
            'Accept':'application/json',
            'Content-Type':'multipart/form-data',
            'Authorization':accessToken
        },
        
      })
       .then(response => {
         const res  = decryptData(response.data)
        console.log(res)
        if (parseInt(res.status) === 200) {
          toast.success(res.message) 
          setSelectDocs("")
          setFrontFile(null)
          setBackFile(null)
          setSelfieFile(null) 
          window.location.reload();
          }else{
            toast.error(res.message)
        }
      if (parseInt(res.status) === 401) {
            History('/login');
         }
        })
      .catch(err => {
        const error  = decryptData(err.response.data)
        if (parseInt(error.status) === 422) {
          toast.error(error.message)
       }
        console.log(error);
      });
};
 
const {
  values,
  errors,
  handleChange,
  handleSubmit
} = KycApproveForm(KycApprove, validate);
// console.log("values",values.valueOf());
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
                <form onSubmit={handleSubmit} noValidate>
                    <div className="select_document_div">
                      <select   id="select" onClick={selectDocFile} name="doc_type" onChange={(e) => setSelectDocs(e.target.value)}>
                        <option value=" ">Select Your Document </option>
                        <option value='adhar'>Aadhar Card</option>
                        <option value='pan'>Pan Card</option>

                      </select>
                     
                    </div>
                    {errors.doc_type && (
                      <span className="error invalid-feedback">{errors.doc_type}</span>
                  )}


                    <div className="upload_document_div">
                      <div className="head">
                        <div>Upload Your ID/Password</div>
                      </div>
                      <div className="upload_file mt-2">
                        <div className="front_image">
                          <p>Front</p>
                          <div className="front">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input id="file-upload"  type="file"  name="front_doc"  onChange={(e) => setFrontFile(e.target.files[0])}/>
                           
                          </div>
                         
                          {errors.front_doc && (
                            <span className="error invalid-feedback">{errors.front_doc}</span>
                        )}
                        </div>

                     {backImageFile ?  <div className="back_image" id="back_images">
                          <p>Back</p>
                          <div className="back">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input  type="file"   name="back_doc"  onChange={(e) => setBackFile(e.target.files[0])}/>
                            
                          </div>
                         
                          {errors.back_doc && (
                            <span className="error invalid-feedback">{errors.back_doc}</span>
                        )}
                        </div> : " "}

                        <div className="selfie_image">
                          <p>Selfie</p>
                          <div className="selfie">
                            <label for="file-upload" className="custom-file-upload">+</label>
                            <input  type="file"   name="selfie"  onChange={(e) => setSelfieFile(e.target.files[0])}/>
                          
                          </div>
                         
                          {errors.selfie && (
                            <span className="error invalid-feedback">{errors.selfie}</span>
                        )}
                        </div>

                      </div>
                    </div>

                    <div className="warning_msg">
                      <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                      <p>Upload your selfie with current date and signature on blank page</p>
                    </div>
                    <div className="kyc_verification_btn">
                      <button className='done_btn' type='submit' onClick={KycApprove}>Done</button>
                    </div>
                    </form>
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

