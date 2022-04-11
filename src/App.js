import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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



function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>

      <Data>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forget_password' element={<ForgetPassword />} />
          <Route path='/verify-otp' element={<VerifyLoginOtp />} />
          <Route path='/Reset-Password' element={<ResetPassword />} />
          
          <Route path='/dashboard' element={<DashHome />} />
          <Route path='/wallet' element={<Wallet/>} />
          <Route path='/user_profile' element={<UserProfileHome/>} />
          <Route path='/edit_user_profile' element={<UserEditProfile/>} />
          <Route path='/user_change_pwd' element={ <ChangePwd/>} />
          <Route path='/user_account_setting' element={ <UserAccountSetting/>} />
          <Route path='/disable_account' element={ <DisableAccount/>} />
          <Route path='/account_details' element={ <UserAccountDetails/>} />
          <Route path='/kyc_verification' element={ <UserKYCVerification/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/transaction_history' element={<TransactionHistory/>} />
          <Route path='/transaction_list' element={<TransactionList/>} />
          <Route path='/fiat_wallet' element={<FiatWallet/>} />
          <Route path='/slice_wallet' element={<SliceWallet/>} />
          <Route path='/payment_method' element={ <PaymentMethod/>} />
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