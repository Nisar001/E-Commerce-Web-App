import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {
   const [email, setEmail] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const [answer, setAnswer] = useState("")
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.post('/api/v1/auth/forgot-password', {email, answer, newPassword});
         if(res && res.data.success){
            toast.success(res.data && res.data.message);
            navigate('/login')
         }else{
            toast.error(res.data.message)
         }

      } catch (error) {
         console.log(error);
         toast.error('Something went wrong');
      }
   }
  return (
    <Layout title={'Forgot-Password'}>
      <div className="form-container">
         <form onSubmit={handleSubmit}>
            <h4 className='title'>Reset Password</h4>
            <div className="mb-3">
               <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" placeholder='Enter Email' required/>
            </div>
            <div className="mb-3">
               <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Best-friend Name' required/>
            </div>
            <div className="mb-3">
               <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className="form-control" id="exampleInputPassword1" placeholder='Enter Your New Password' required/>
            </div>

            <button type="submit" className="btn btn-primary">Reset</button>
         </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword