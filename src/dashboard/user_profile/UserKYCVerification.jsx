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
import $ from 'jquery'
// import validate from '../../validation/KycApprove'
// import { KycApproveForm } from '../../Form'


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
  console.log();
  
  const [frontPrevFile, setFrontPrevFile] = React.useState();
  const [backPrevFile, setBackPrevFile] = React.useState();
  const [selfiePrevFile, setSelfiePrevFile] = React.useState();

  const deleteFrontImg = () =>{
    setFrontPrevFile(null)
  }
  const deleteBackImg = () =>{
    setBackPrevFile(null)
  }
  const deleteSelfieImg = () =>{
    setSelfiePrevFile(null)
  }


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
    $("#documentError").hide()
   
  }
 

   useEffect(()=>{
      $("#documentError").hide()
      $("#frontImgError").hide()
      $("#backImgError").hide()
      $("#selfieImgError").hide()
  },[])

  const validate = ()=>{
    $("#documentError").hide()
    $("#frontImgError").hide()
    $("#backImgError").hide()
    $("#selfieImgError").hide()
  }

 

      
async function KycApprove (){
  if(docType===""){
    $("#documentError").show()
    return
  }
  if(!frontFile || frontFile.length === 0){
    $("#frontImgError").show()
    return
  
  }
  if(!backFile || backFile.length === 0){
    $("#backImgError").show()
    return
  }
  if(!selfieFile || selfieFile.length === 0){
    $("#selfieImgError").show()
    return
  }
 
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
 console.log("form data", formData)
 
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
            window.location.reload();
       }
        console.log(error);
      });
};
 

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
                      <select   id="select" onClick={selectDocFile} name="doc_type" onChange={(e) => setSelectDocs(e.target.value)} >
                        <option value=" ">Select Your Document </option>
                        <option value='adhar'>Aadhar Card</option>
                        <option value='pan'>Pan Card</option>

                      </select>
                     
                    </div>
                   <p className='docs_image' id='documentError'>Please select document type</p>


                    <div className="upload_document_div">
                      <div className="head">
                        <div>Upload Your ID/Password</div>
                      </div>
                      <div className="upload_file mt-2">
                      <div className="front_image mb-3">
                      <p>{` ${document} Front`}</p>
                      <div className="front" style={{position: "relative" }}>
                      {/* {frontImagePreview } */}

                      {frontPrevFile ?
                        <div>
                          <img className="preview" id="frontImg" src={frontPrevFile} alt="" style={{width:"240px", height:"160px", objectFit:"cover"}}></img>
                          <input type="button" id="removeImage1" value="x" class="btn-remove "  onClick={deleteFrontImg}  />
                        </div>
                        :
                        <div for="file-upload" className="custom-file-upload" style={{width:"240px", height:"160px", objectFit:"cover"}}>
                          <input type="file" id="file" name='front_doc' onChange={(e) => {
                            setFrontFile(e.target.files[0]);
                            setFrontPrevFile(URL.createObjectURL(e.target.files[0]))
                          }} onClick = {validate}/>
                          <label for="file" class="btn-1">Upload</label>

                        </div>}
                    </div>
                      
                    </div>
                        <p className='docs_image' id='frontImgError'>Please select Front image</p>
                      

                      {backImageFile ? <div className="back_image" id="back_images">
                      <p>{` ${document} Back`}</p>
                          <div className="back" style={{position: "relative" }}>
                            {backPrevFile ?
                              <div>
                                <img className="preview" src={backPrevFile} alt="" style={{width:"240px", height:"160px", objectFit:"cover"}}></img>
                                <input type="button" id="removeImage2" value="x" class="btn-remove " onClick={deleteBackImg} />
                              </div>
                              :
                              <div for="file-upload" className="custom-file-upload" style={{width:"240px", height:"160px", objectFit:"cover" }}>
                                <input type="file" id="file" onChange={(e) => {
                                  setBackFile(e.target.files[0]);
                                  setBackPrevFile(URL.createObjectURL(e.target.files[0]))
                                }} />
                                <label for="file" class="btn-1">Upload</label>
                              </div>
                            }


                          </div>

                        </div> : " "}
                       
                        <div className="selfie_image ">
                        <p>Selfie</p>
                        <div className="selfie" style={{position: "relative" }}>
                            {selfiePrevFile ?
                              <div>
                                <img className="preview" src={selfiePrevFile} alt="" style={{ width:"150px", height:"160px", objectFit:"cover" }}></img>
                                <input type="button" id="removeImage3" value="x" class="btn-remove " onClick={deleteSelfieImg} />
                              </div>
                              :
                              <div for="file-upload" className="custom-file-upload" style={{ width:"150px", height:"160px", objectFit:"cover" }}>
                                <input type="file" id="file" name='selfie' onChange={(e) => {
                                  setSelfieFile(e.target.files[0]);
                                  setSelfiePrevFile(URL.createObjectURL(e.target.files[0]))

                                }} onClick = {validate}/>
                                <label for="file" class="btn-1">Upload</label>
                              </div>
                            }


                          </div>


                      </div>
                        <p className='docs_image' id='selfieImgError'>Please select selfie image</p>
                      </div>
                    </div>

                    <div className="warning_msg">
                      <div className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                      <p>Upload your selfie with current date and signature on blank page</p>
                    </div>
                    <div className="kyc_verification_btn">
                      <button className='done_btn' onClick={KycApprove}>Done</button>
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

