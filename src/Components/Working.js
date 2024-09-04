import React from 'react'
import './Working.css'

function Working() {
  return (
    <div className='working'>
      <div className='working-head'>
        <h2>How Our Plateform Works</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. PageMaker including versions of Lorem Ipsum. </p>
      </div>


      <div className='works-sec'>


        <div className='work1'>
          <img src='/Images/Icon.png' alt='...'></img>
          <h5>Lorem Ipsum</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</p>
        </div>
          <img id='line-div' src='/Images/Group 1000011278.png' alt='...'></img>
        <div className='work1'>
          <img src='/Images/Icon.png' alt='...'></img>
          <h5>Lorem Ipsum</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</p>
        </div>
        <img id='line-div' src='/Images/Group 1000011278.png' alt='...'></img>

        <div className='work1'>
          <img src='/Images/Icon.png' alt='...'></img>
          <h5>Lorem Ipsum</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</p>
        </div>

      </div>

      <div className='work-bottom'>
        <button>{'<'}</button>
        <button>{'>'}</button>
      </div>
    </div>
  )
}

export default Working