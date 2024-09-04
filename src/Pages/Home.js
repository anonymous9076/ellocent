import React from 'react'
import Navbar from '../Components/Navbar'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Getapp from '../Components/Getapp'
import Benifits from '../Components/Benifits'
import Benifits2 from '../Components/Benifits2'
import Ques from '../Components/Ques'
import Working from '../Components/Working'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Section1></Section1>
    <Section2></Section2>
    <Benifits2></Benifits2>
    <Benifits></Benifits>
    <Working></Working>
    <Getapp></Getapp>
    <About></About>
    <Ques></Ques>
    <Footer></Footer>
    </>
  )
}

export default Home