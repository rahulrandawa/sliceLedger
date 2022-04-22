import React, {useContext,useState, useEffect} from 'react'
import { Container, Row, Col, Image,Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faCircleExclamation, faEye } from '@fortawesome/free-solid-svg-icons'
import Header from '../common/Header'
import SideNavbar from '../common/SideNavbar'
import myContext from '../../context/MyContext'
import { decryptData } from '../../Helper'
import {BsCameraFill} from 'react-icons/bs'
import { toast } from 'react-toastify'
// import validate from '../../validation/UpdateProfile'
// import { UpdateProfileForm } from '../../Form'
import axios from 'axios'
import $ from 'jquery'

export default function UserProfileHome() {
    const [isEdit, setIsEdit] = useState(false)
    let History = useNavigate();
    const showNav = useContext(myContext)
    const accessToken =  localStorage.getItem('accessToken')
    const auth =  JSON.parse(localStorage.getItem('auth'));
    const [user, setUser] = useState([]);
   console.log("user",user)
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [profilepic, setProfilePic] = useState()
    const [previewPrfile, setPreProfilePic] = React.useState("")

   
    console.log("first_name",first_name);
    console.log("last_name",last_name);

    console.log("phone_number",phone_number);

    console.log("profilepic",profilepic);
    console.log("previewPrfile",previewPrfile);


     useEffect( () => {
       userDetail()
    }, [])

    const handleEdit = ()=>{
        setIsEdit(true)
       
    }

    useEffect(()=>{
        $("#firstNameError").hide()
        $("#lastNameError").hide()
        $("#phoneNumberError").hide()
    },[])

   const validate = ()=>{
        $("#firstNameError").hide()
        $("#lastNameError").hide()
        $("#phoneNumberError").hide()
    }
      async  function UpdateProfile(){
        if(first_name===" "){
            $("#firstNameError").show()
            return
          }
          if(last_name === " "){
            $("#lastNameError").show()
            return
          
          }
          if(phone_number ===" " ){
            $("#phoneNumberError").show()
            return
          }
         
        const formData = new FormData();
        formData.append("first_name",first_name);
        formData.append("last_name", last_name);
        formData.append("phoneNumber", phone_number);
        formData.append("profilePic", profilepic, profilepic.name);
        await  axios.post("https://bharattoken.org/sliceLedger/admin/api/auth/updateProfile",formData, {
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
              setFirstName("")
              setLastName("")
              setPhoneNumber("")
              setProfilePic("")
              setPreProfilePic("") 
              setIsEdit(false)
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
       

         
    }

  

    function userDetail() {
        fetch("https://bharattoken.org/sliceLedger/admin/api/auth/user", {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": accessToken
            },
           })
          .then(response => response.json())
          .then(response => {
            const res  = decryptData(response);
            if (parseInt(res.status) === 401) {
                History('/login');
            }
            setUser(res.result);
          })
          .catch(err => {
            console.log(err);
          });
    }

   
    
    

    return (
        <>
            <Header/>
            <div className="main-section d-flex">
                <div className="sideNav_section" style={{ width: showNav.navOpen ? "300px" : "0px", transition: "all 0.5s ease" }}>
                    <SideNavbar />
                </div>
                <section className='slice_user_profileHome_section' style={{ width: showNav.navOpen ? "calc(100vw - 300px)" : "100vw", transition: "all 0.5s ease" }}>
                    <Container>

                       {isEdit ? 
                            <Row className='justify-content-center' id='updateDiv' >
                            <Col lg={8}>
                                <div className="user_profileHome_container">
                                    <div className="user_profile_details">
                                        <Row>
                                            <Col lg={12}>
                                                <div className="my_profile_title">
                                                    <h5>Edit Profile</h5>
                                                </div>
                                            </Col>
                                            <Col lg={4} className="mt-3">
                                            <div className="edit_profile_img">
                                            {previewPrfile ? 
                                            <Image  src={previewPrfile} fluid /> : <Image  src={user.profilePic} fluid  /> 
                                            }
                                           <div class="wrapper">
                                               <div class="file-upload">
                                                   <input type="file" name='profilePic'  onChange={(e) => {
                                                    setProfilePic(e.target.files[0]);
                                                    setPreProfilePic(URL.createObjectURL(e.target.files[0]))
                                                    }} />
                                                   <BsCameraFill />
                                                   
                                               </div>
                                              </div>
                                            </div>
                                            </Col>
                                            
                                            <Col lg={8} className="mt-3">
                                           
                                                <div className="personal_section">
                                                    <div className="person_info_title">
                                                        <h6>Personal Information</h6>
                                                        <button className='btn btn-primary update_btn' id='updateButton' onClick={UpdateProfile}>Update</button>
                                                    </div>
                                       
                                                    <div className="person_details">
                                                    
                                                        <Row>
    
                                                            <Form.Group as={Row} className="mb-3"   >
                                                                <Form.Label column sm="4">
                                                                    First Name
                                                                </Form.Label>
                                                                <Col sm="8">
                                                                    <Form.Control type="text"  name='first_name' onChange={(e) => setFirstName(e.target.value)}   value={ first_name == null ? user.first_name : first_name} onClick = {validate} />
                                                                    <p className='errormsg' id='firstNameError' >First Name Field is Required</p>
                                                                </Col>
                                                                
                                                            </Form.Group>
                                                           
                                                            <Form.Group as={Row} className="mb-3" >
                                                                <Form.Label column sm="4">
                                                                    Last Name
                                                                </Form.Label>
                                                                <Col sm="8">
                                                                    <Form.Control type="text"  name='last_name' onChange={(e) => setLastName(e.target.value)} value={ last_name === " " ? user.last_name : last_name}  onClick = {validate}/>
                                                                    <p className='errormsg' id='lastNameError'>Last Name Field is Required</p>
                                                                </Col>
                                                            </Form.Group>
                                                            
                                                            <Form.Group as={Row} className="mb-3" >
                                                                <Form.Label column sm="4">
                                                                    Email Id
                                                                </Form.Label>
                                                                <Col sm="8">
                                                                    <Form.Control type="text"  name='email' value={(user.email)?user.email:""} readOnly/>
                                                                </Col>
                                                            </Form.Group>
    
    
                                                            <Form.Group as={Row} className="mb-3" >
                                                                <Form.Label column sm="4">
                                                                    Mobile No
                                                                </Form.Label>
                                                                <Col sm="8">
                                                                    <Form.Control type="text"  name='phoneNumber' id='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} value={ phone_number === " " ? user.phoneNumber : phone_number}  onClick = {validate}/>
                                                                    <p className='errormsg' id='phoneNumberError'>Phone Number  Field is Required</p>
                                                                </Col>
                                                            </Form.Group>
                                                            
    
    
    
                                                        </Row>
                                                       
                                                    </div>
                                                    
                                                </div>
    
                                               
    
                                                <div className="account_section">
                                                    <div className="account_info_title">
                                                        <h6>Account Information</h6>
                                                    </div>
    
                                                    <div className="account_details">
                                                        <Row>
    
                                                            <Col lg={6} md={6}>
                                                                <p className='title color'>Current Balance</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                <p className='text color'>10,000 INR</p>
                                                            </Col>
    
                                                             <Col lg={6} md={6}>
                                                                <p className='title'>Account No</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                 <p className='text'>
                                                                 {(auth.bankAcount.acountNumber)?auth.bankAcount.acountNumber:"NA" }
                                                                 </p>
                                                             </Col>
    
                                                            <Col lg={6} md={6}>
                                                                <p className='title'>IFSC Code</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                            <p className='text'>
                                                            {(auth.bankAcount.ifsc)?auth.bankAcount.ifsc:"NA" }
                                                            </p>
                                                        </Col>
    
                                                            <Col lg={6} md={6}>
                                                                <p className='title'>Account Type</p>
                                                            </Col>
                                                            <Col lg={6} md={6}>
                                                                 <p className='text'>
                                                                 {(auth.bankAcount.acountType)?auth.bankAcount.acountType:"NA" }
                                                                 </p>
                                                             </Col>
                                                        </Row>
                                                    </div>
    
                                                </div>
                                               
                                            </Col>
                                           
                                        </Row>
                                    </div>
                                </div>
    
                            </Col>
                        </Row>
                             : 
                             <Row className='justify-content-center' id='editDiv'>
                             <Col lg={8}>
                                 <div className="user_profileHome_container">
                                     <div className="user_profile_details">
                                         <Row>
                                             <Col lg={12}>
                                                 <div className="my_profile_title">
                                                     <h5>My Profile</h5>
                                                 </div>
                                             </Col>
                                             <Col lg={4} className="mt-3">
                                                 <div className="userProfile_img">
                                                     <Image src={user.profilePic} fluid />
                                                 </div>
                                             </Col>
 
                                             <Col lg={8} className="mt-3">
                                                 <div className="personal_section">
                                                     <div className="person_info_title">
                                                         <h6>Personal Information</h6>
                                                         <button className='btn btn-primary update_btn' id='EditButton' onClick={handleEdit}>Edit</button>
                                                     </div>
 
                                                     <div className="person_details">
                                                     
                                                         <Row>
 
                                                             <Col lg={4} md={4}>
                                                                 <p className='title'>First Name</p>
                                                             </Col>
                                                             <Col lg={8} md={8}>
                                                                 <p className='text'> {user.first_name} </p>
                                                             </Col>
 
 
                                                             <Col lg={4} md={4}>
                                                                 <p className='title'>Last Name</p>
                                                             </Col>
                                                             <Col lg={8} md={8}>
                                                                 <p className='text'>{user.last_name}</p>
                                                             </Col>
 
                                                             <Col lg={4} md={4}>
                                                                 <p className='title'>Email Id</p>
                                                             </Col>
                                                             <Col lg={8} md={8}>
                                                                 <p className='text'>{user.email}</p>
                                                             </Col>
 
                                                             <Col lg={4} md={4}>
                                                                 <p className='title'>Mobile No</p>
                                                             </Col>
                                                             <Col lg={8} md={8}>
                                                                 <p className='text'>{user.phoneNumber}</p>
                                                             </Col>
 
 
                                                         </Row>
                                                     </div>
                                                 </div>
 
                                                 <div className="account_section">
                                                     <div className="account_info_title">
                                                         <h6>Account Information</h6>
                                                     </div>
 
                                                     <div className="account_details">
                                                         <Row>
 
                                                             <Col lg={6} md={6}>
                                                                 <p className='title color'>Current Balance</p>
                                                             </Col>
                                                             <Col lg={6} md={6}>
                                                                 <p className='text color'>10,000 INR</p>
                                                             </Col>
 
                                                            <Col lg={6} md={6}>
                                                                 <p className='title'>Account No</p>
                                                             </Col>
                                                             <Col lg={6} md={6}>
                                                                 <p className='text'>
                                                                 {(auth.bankAcount.acountNumber)?auth.bankAcount.acountNumber:"NA" }
                                                                 </p>
                                                             </Col>
 
                                                             <Col lg={6} md={6}>
                                                                 <p className='title'>IFSC Code</p>
                                                             </Col>
                                                             <Col lg={6} md={6}>
                                                                 <p className='text'>
                                                                 {(auth.bankAcount.ifsc)?auth.bankAcount.ifsc:"NA" }
                                                                 </p>
                                                             </Col>
 
                                                             <Col lg={6} md={6}>
                                                                 <p className='title'>Account Type</p>
                                                             </Col>
                                                             <Col lg={6} md={6}>
                                                                 <p className='text'>
                                                                 {(auth.bankAcount.acountType)?auth.bankAcount.acountType:"NA" }
                                                                 </p>
                                                             </Col>
                                                         </Row>
                                                     </div>
                                                 </div>
                                             </Col>
                                         </Row>
                                     </div>
                                 </div>
 
                             </Col>
                         </Row>
                             }

                       

                    </Container>
                </section>
            </div>

        </>
    )
}

