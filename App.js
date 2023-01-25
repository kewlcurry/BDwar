import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CommonNav from './components/CommonNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import { Fetch } from './components/Fetch';

function App() {
  return (
    <div>
    {/* <CommonNav/>
    {/* <Home/> */}
    {/*<Dashboard/>*/}
    {/* <Profile/> */}
    {/* <Login/> */}
    {/* <Register/> 
    <Footer/> */}
    <Routes>
          <Route path="/" element={<><CommonNav/><Home/></>}/>
          <Route path="login" element={<><CommonNav/><Login/></>}/>
          <Route path="index" element={<><CommonNav/><Home/></>}/>
          <Route path="profile" element={<><CommonNav/><Profile/></>}/>
          <Route path="dashboard" element={<><CommonNav/><Dashboard/></>}/>
          <Route path="loginbutton" element={<><CommonNav/><Home/></>}/>
          <Route path="Register" element={<><CommonNav/><Register/></>}/>
          <Route path="registerbutton" element={<><CommonNav/><Login/></>}/>
          <Route path="contactus" element={<><CommonNav/><Contact/></>}/>

          {/* <Route path="types" element={<Types/>}/>
          <Route path="AlumniLogin" element={<><AlumniLogin/></>}/>
          <Route path="AlumniRegister" element={<><AlumniRegister/></>}/>
          <Route path="AlumniHome" element={<><Alumni_Nav/><Home/></>}/>
          <Route path="AlumniAbout" element={<><Alumni_Nav/><AboutUs/></>}/>
          <Route path="AlumniEvents" element={<><Alumni_Nav/><Events/></>}/>
          <Route path="AlumniProfile" element={<><Alumni_Nav/><Profile/></>}/>
          <Route path="AdminLogin" element={<><AdminLogin/></>}/>
          <Route path="AdminRegister" element={<><AdminRegister/></>}/>
          <Route path="AdminHome" element={<><Admin_Nav/><Home/></>}/>
          <Route path="AdminAbout" element={<><Admin_Nav/><AboutUs/></>}/>
          <Route path="AdminEvents" element={<><Admin_Nav/><Events/></>}/>
          <Route path="AdminSearch" element={<><Admin_Nav/><Directory/></>}/>
          <Route path="AdminVerify" element={<><Admin_Nav/><Verify/></>}/> */}
      </Routes>
      <Fetch/>
      <Footer/>
      
    </div>
  );
}

export default App;
