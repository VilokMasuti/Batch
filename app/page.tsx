import React from 'react'
import Nav from './(shared)/Nav'
import Hero from './(shared)/Hero'
import Features from './(shared)/features/page'
import Advatnage from './(shared)/about/page'
import Testimonial from './(shared)/Testimonial'
import Pricing from './(shared)/priceing/page'
import Download from './(shared)/Download'
import Footer from './(shared)/Footer'

const page = () => {
  return (
<main className=" relative    flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
<Nav/>
<Hero/>
<Features/>
<Advatnage/>
<Testimonial/>


<Pricing/>
  <Download/>  
<Footer/>
      </div>
    
    </main>
  )
}

export default page