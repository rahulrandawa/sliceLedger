import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/style/main.scss';
// import Footer from './common/Footer';
// import Header from "./common/Header";
import Home from './landing_page/Home'
import ForgetPassword from './site_authentication/ForgetPassword';
import ResetPassword from './site_authentication/ResetPassword';
import Login from './site_authentication/Login';
import VerifyLoginOtp from './site_authentication/VerifyLoginOtp';
import SignUp from './site_authentication/SignUp';
import DashHome from './dashboard/home/DashHome';
import Wallet from './dashboard/home/Wallet';
import UserProfileHome from './dashboard/user_profile/UserProfileHome';
import UserEditProfile from './dashboard/user_profile/UserEditProfile';
import  ChangePwd  from './dashboard/user_profile/ChangePwd';
import UserAccountSetting from './dashboard/user_profile/UserAccountSetting';
import DisableAccount from './dashboard/user_profile/DisableAccount';
import UserAccountDetails from './dashboard/user_profile/UserAccountDetails';
import UserKYCVerification from './dashboard/user_profile/UserKYCVerification';
import Feedback from './dashboard/home/Feedback';
import TransactionHistory from './dashboard/home/TransactionHistory';
import TransactionList from './dashboard/wallet/TransactionList';
import FiatWallet from './dashboard/wallet/FiatWallet';
import SliceWallet from './dashboard/wallet/SliceWallet';
import PaymentMethod from './dashboard/wallet/PaymentMethod';
import Data from './context/Data';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {AuthRoute, AuthNotRoute} from "./AuthRoute";

function App() {

  return (
    <>

      {/* <Header /> */}
      <BrowserRouter>
      <Data>
        <Routes>

        <Route path='/' element={<Home />} />
          <Route exact path='/login' element= {
            <AuthNotRoute>
              <Login />
            </AuthNotRoute>
          }
          />
          <Route exact path='/signup' element= {
            <AuthNotRoute>
              <SignUp />
            </AuthNotRoute>
          }
          />
          <Route exact path='/forget_password' element= {
            <AuthNotRoute>
              <ForgetPassword />
            </AuthNotRoute>
          }
          />
          <Route exact path='/verify-otp' element= {
            <AuthNotRoute>
              <VerifyLoginOtp />
            </AuthNotRoute>
          }/>
          <Route exact path='/Reset-Password' element= {
            <AuthNotRoute>
              <ResetPassword />
            </AuthNotRoute>
          }
          />

          <Route exact path='/dashboard' element= {
            <AuthRoute>
              <DashHome />
            </AuthRoute>
          }
          />
          <Route path='/wallet' element= {
            <AuthRoute>
              <Wallet />
            </AuthRoute>
          } />
          <Route path='/user_profile' element= {
            <AuthRoute>
              <UserProfileHome />
            </AuthRoute>
          } />
          <Route path='/edit_user_profile' element= {
            <AuthRoute>
              <UserEditProfile />
            </AuthRoute>
          } />
          <Route path='/user_change_pwd' element= {
            <AuthRoute>
              <ChangePwd />
            </AuthRoute>
          } />
          <Route path='/user_account_setting' element= {
            <AuthRoute>
              <UserAccountSetting />
            </AuthRoute>
          } />
          <Route path='/disable_account' element= {
            <AuthRoute>
              <DisableAccount />
            </AuthRoute>
          } />
          <Route path='/account_details' element= {
            <AuthRoute>
              <UserAccountDetails />
            </AuthRoute>
          } />
          <Route path='/kyc_verification' element= {
            <AuthRoute>
              <UserKYCVerification />
            </AuthRoute>
          } />
          <Route path='/kyc_verification' element= {
            <AuthRoute>
              <UserKYCVerification />
            </AuthRoute>
          } />
          <Route path='/feedback' element= {
            <AuthRoute>
              <Feedback />
            </AuthRoute>
          } />
          <Route path='/transaction_history' element= {
            <AuthRoute>
              <TransactionHistory />
            </AuthRoute>
          } />
          <Route path='/transaction_list' element= {
            <AuthRoute>
              <TransactionList />
            </AuthRoute>
          } />
          <Route path='/fiat_wallet' element= {
            <AuthRoute>
              <FiatWallet />
            </AuthRoute>
          } />
          <Route path='/slice_wallet' element= {
            <AuthRoute>
              <SliceWallet />
            </AuthRoute>
          } />
          <Route path='/payment_method' element= {
            <AuthRoute>
              <PaymentMethod />
            </AuthRoute>
          } />
        </Routes>
      </Data>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  );
}

export default App;
// basename='/sliceLedger/'