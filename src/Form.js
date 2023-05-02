import React from 'react'
import { useState } from 'react'
import GreenText from './GreenText'
import ResetPasswordButton from './ResetPasswordButton';

export default function() {
    const lowercaseLetters = /[a-z]/g;
    const uppercaseLetters = /[A-Z]/g;
    const numberRegEx = /[0-9]/g;
    const [data, setData] = useState("");
    const [requirements, setRequirements] = useState({
        "length": 0,
        "lowerCase": false,
        "upperCase": false,
        "number": false,
        "specialCharacter": false
    });


    function onValidate(e) {
        let validationData = { ...requirements };


        if (uppercaseLetters.test(e.target.value)) {
            // setRequirements({...requirements,upperCase:true})
            validationData = { ...requirements, upperCase: true }
        }

        if (lowercaseLetters.test(e.target.value)) {
            // setRequirements({...requirements,lowerCase:true})
            validationData = { ...requirements, lowerCase: true }
        }

        if (numberRegEx.test(e.target.value)) {
            // setRequirements({...requirements,number:true})
            validationData = { ...requirements, number: true }
        }

        if (/[^a-zA-Z0-9\-\/]/.test(e.target.value)) {
            // setRequirements({...requirements,specialCharacter:true})
            validationData = { ...requirements, specialCharacter: true }
        }
        setData(e.target.value);
        setRequirements({ ...validationData });
    }




    return (
        <div className='passResetForm'>
            <form>
                <div className='inputField'>
                    <label> Create a Password</label>
                    <br />
                    <input type="password" onChange={onValidate} />
                </div>
                <div className='inputField'>
                    <label> Confirm new Password</label>
                    <br />
                    <input type="password" />
                </div>
            </form>

            <GreenText requirements={requirements} data={data} />
            <ResetPasswordButton />
        </div>
    )
}