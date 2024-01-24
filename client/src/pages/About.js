import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={'About us - Ecommerce App'}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src='/images/aboutus.jpg'
            alt='About US'
            style={{width:"100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p>djkfhodi fdfoiejfoiefjfvkj foerhfiuer uhfiuerhvi efuveoihbouigh Linkfgoh stvu9gh
          oigub euihviut yvoj  bo ui t  ijvjoef vf</p>
        </div>
      </div>
    </Layout>
  )
}

export default About