import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute.js';
import AdminDashboard from "./pages/Admin/AdminDashboard.js";

 function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard/user' element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard/>}></Route>
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}></Route>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
