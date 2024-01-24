import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={'Contact us - Ecommerce app'}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src='/images/contactus.jpg'
            alt='Contact US'
            style={{width:"100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">Any query and info about product feel free to call anytime we 24X7 available</p>
          <p className="mt-3">
            <BiMailSend/> : WWWW.HELP@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall/> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport/> : 1800-0000-0000 (Toll Free)          
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact