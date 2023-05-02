import React from 'react'
import './App.css'
const GreenText = ({requirements, data}) => {
  return (
      <div className='resetMessage'>
       <h3 className={requirements.lowerCase ? 'greenColor' : 'redColor'}>one lowercase character</h3>
       <h3 className={requirements.specialCharacter ? 'greenColor' : 'redColor'}>one specialCharacter</h3> 
       <h3 className={requirements.upperCase ? 'greenColor' : 'redColor'}>one upperCase</h3>
       <h3 className={data.length >= 8 ? 'greenColor' : 'redColor'}>8 characters minimum</h3>
       <h3 className={requirements.number? 'greenColor':'redColor'}>one number</h3>
    </div>
  )
}

export default GreenText
