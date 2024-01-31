import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify'
const Register = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")

   // form submit function

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, password, phone, address);
      toast.success("Registration sucessfully")
   }

   return (
    <Layout title={'Sign-Up'}>
      <div className="register">
         <h1>Register Here</h1>
         <form onSubmit={handleSubmit}>
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