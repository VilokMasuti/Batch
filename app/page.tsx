import React from 'react'
import Nav from './UI/Nav'
import Hero from './UI/Hero'
import Features from './UI/Features'
import Advatnage from './UI/Advatnage'

const page = () => {
  return (
<main className=" relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
<Nav/>
<Hero/>
<Features/>
<Advatnage/>
      </div>
    
    </main>
  )
}

export default page