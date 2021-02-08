import React,{useState, useEffect} from 'react'
import {registerUser} from '../backend/userMutations'
import {Redirect} from 'react-router-dom'

const register = () => {
    const [error, setError] = new useState('');
    const [name, setName] = new useState('');
    const [email, setEmail] = new useState('');
    const [pass, setPass] = new useState('');
    const [finished, setFinished] = new useState('');

    const handleRegister = () => {
        registerUser({username: name, email: email, password: pass}, (dat)=>{
          if(dat.message)
              setError(dat.message)
              else{
                setFinished(true);
              }
        })
    }

    return(
        <>
        {
          error?
            <div className="alert alert-danger" role="alert">
              Error: {error}
            </div>
        : <></>
        }

          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-form-title" style={{backgroundImage: `url(images/bg-01.jpg)`}}>
                <span className="login100-form-title-1">
                  Sign In
                </span>
              </div>

              <form className="login100-form validate-form">   
                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                  <span className="label-input100">Username</span>
                  <input className="input100" type="text" name="username" placeholder="Enter username" id="nameinput"  onChange={(e)=> {setName(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                  <span className="label-input100">Email</span>
                  <input className="input100" type="email" name="email" placeholder="Enter email" id="emailinput"  onChange={(e)=> {setEmail(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                  <span className="label-input100">Password</span>
                  <input className="input100" type="password" name="pass" placeholder="Enter password" id="passinput" onChange={(e)=> {setPass(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="flex-sb-m w-full p-b-30">

                  <div>
                    <a href="/login" className="txt1">
                      Login
                    </a>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button  type="button" id="loginbtn" className="login100-form-btn" onClick={() => { handleRegister()}}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

        {
            finished ? 
            <Redirect to={`/login`} /> : null
        }
        </>
    );
}

export default register;