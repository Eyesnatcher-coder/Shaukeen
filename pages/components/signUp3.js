import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { onAuthStateChanged, signInWithPopup, getAuth, updateProfile,sendEmailVerification} from "firebase/auth"
import { auth, provider } from "../firebase/firebase"
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { createUserWithEmailAndPassword } from "firebase/auth"
import axios from 'axios';


/////////////////////////// Email Verification...........///////////////////////////////


const checkEmailExistence = async (email) => {
    const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;

    try {
        const response = await axios.get(apiUrl);
        //   console.log(response)

        // console.log(response.data.status)
        // Check if email exists based on ZeroBounce API response
        return response.data.status === "valid";
    } catch (error) {
        console.log('Error checking email existence:', error);
        return false;
    }

};




const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const SignUp = () => {
    const [showPass, setshowPass] = useState(false)
    const [showPassword, setshowPassword] = useState("password")
    const [isChecked, setIsChecked] = useState(false);
    const [registerEmail, setregisterEmail] = useState("")
    const [registerName, setregisterName] = useState("")
    const [registerPassword, setregisterPassword] = useState("")
    const [registercnfrmPassword, setregistercnfrmPassword] = useState("")
    const [user1, setUser] = useState("")
    const router = useRouter()
    //Login with Google.......

    const signInwithgoogle = async () => {
        const user = await signInWithPopup(auth, provider)
        // console.log(user.user.displayName)
        setUser(user.user.displayName)
        alert("Signed In")
        cookie.set('UserName', user.user.displayName)
        console.log(cookie.get('UserName'))
        // console.log(user1)
        router.push({
            pathname: 'http://localhost:3000/',

        })
    }


    // Register User with Email And Password.............

    const auth = getAuth()

    const Register = async () => {

        const emailExists = await checkEmailExistence(registerEmail);
        // console.log(emailExists)
        if (!emailExists) alert("Email Doesn't Exist")


        else if (registerEmail === "" || registerPassword === "" || registercnfrmPassword === "" || registerName === "") {
            alert("Please Fill the form properly")
        }
        else if (registerPassword !== registercnfrmPassword) {
            alert("Password doesn't match!!!")
        }
        else if (isChecked === false) {
            alert("Please Accept terms and conditions")
        }
        else {

            try {
                const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
                alert("Successfully registered")
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Email Sent")
                    });
                updateProfile(auth.currentUser, {
                    displayName: registerName
                }).then(() => {
                    console.log("Profile Updated")
                }).catch((error) => {
                    console.log(error)
                });
                console.log(user)

            } catch (e) {
                console.log(e)
                alert(e)
            }
        }

    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleShowPassword = () => {
        setshowPass(!showPass)
        showPassword === "password" ? setshowPassword("text") : setshowPassword("password")
    }

    const handlecnfrmPassword = (e) => {

        setregistercnfrmPassword(e.target.value)
    }

    return <>

        <div className="mainSignUpcont">
            <div className="secondsignupcont"   >
                <p style={{ marginBottom: "30px", fontSize: "40px", color: "purple", textAlign: 'center', fontWeight: "bolder" }}>Register </p>
                <input
                    className="signUpEnterEmail"
                    type="text"
                    placeholder="Enter your Name"
                    onChange={(e) => { setregisterName(e.target.value) }}
                />
                <input
                    className="signUpEnterEmail"
                    type="email"
                    placeholder="Enter your Email"
                    onChange={(e) => { setregisterEmail(e.target.value) }}
                />
                <div className="signUpInputCont">
                    <input
                        className="signUpEnterPass"
                        type={showPassword}
                        placeholder="Enter your Password"
                        onChange={(e) => { setregisterPassword(e.target.value) }}
                    />
                    <button onClick={handleShowPassword} > <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className='signupicon' /></button>

                </div>
                <input
                    className='signUpEnterEmail'
                    type='password'
                    onChange={(e) => { handlecnfrmPassword(e) }}
                    placeholder="Confirm your Password"
                />
                <label>
                    <input

                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className='signupTerms'> Agree to Terms and Conditions</span>
                </label>
                <button className='signupsubmitbtn' onClick={Register}>Sign Up</button>

                <p style={{ textAlign: 'center', marginTop: "20px", fontSize: "20px" }}>Or</p>

                <button className='signupsubmitbtngoogle' onClick={signInwithgoogle}>
                    <GoogleIcon icon={faGoogle} beatFade />
                    Sign In with Google
                </button >

                <button ><p style={{ textAlign: "center", fontSize: "24px", padding: "10px", color: "blue" }}>Already have an Account</p>
                </button>
            </div>

        </div>




    </>
}

export default SignUp
