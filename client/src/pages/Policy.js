import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Policy - Ecommerce app'}>
      <div className="row policy">
        <div className="col-md-6">
          <img
            src='/images/privacy.jpg'
            alt='Contact US'
            style={{width:"100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          
        </div>
      </div>
    </Layout>
  )
}

export default Policy