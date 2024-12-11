import React ,{useState} from "react";
import './LoginSighnup.css';



import person from '../Assets/person.png'
import email from '../Assets/email.png'
import password from '../Assets/password.png'
const LoginSighnup=()=>{
  const [action,setAction]=useState("Sign Up");
  return(
    <div className='container'>
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
            <img src={person} alt="" />
            <input type="text" name="" id=""placeholder="Name" />
        </div>}
        
        <div className="input">
            <img src={email} alt="" />
            <input type="email" name="" id=""placeholder="Email" />
        </div>
        <div className="input">
            <img src={password} alt="" />
            <input type="password" name="" id=""placeholder="password" />
        </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password<span>Click Here</span></div>}
        <div className="submit-container"></div>
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    </div>
  )
}
export default LoginSighnup;