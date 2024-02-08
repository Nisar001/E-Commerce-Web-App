import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const Register = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")
   const navigate = useNavigate();
   // form submit function

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.post('/api/v1/auth/register', {name, email, password, phone, address});
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
    <Layout title={'Sign-Up'}>
      <div className="form-container">
         <form onSubmit={handleSubmit}>
            <h4 className='title'>Register Here</h4>
            <div className="mb-3">
               <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required/>
            </div>
            <div className="mb-3">
               <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" placeholder='Enter Email' required/>
            </div>
            <div className="mb-3">
               <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder='Create Your Password' required/>
            </div>
            <div className="mb-3">
               <input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control" id="exampleInputPhone1" placeholder='Enter Phone' required/>
            </div>
            <div className="mb-3">
               <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control" id="exampleInputAddress1" placeholder='Enter Address' required/>
            </div>
            <div className="mb-3 form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
               <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
    </Layout>
  )
}

export default Register