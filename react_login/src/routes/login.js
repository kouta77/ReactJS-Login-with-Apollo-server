import React,{useState, useEffect} from 'react'
import {loginUser} from '../backend/userMutations'
import './css/main.css';
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';


const Login = ({setToken}) => {
    const [error, setError] = new useState('');
    const [email, setEmail] = new useState('');
    const [pass, setPass] = new useState('');
    const [authUser, setAuthUser] = new useState();

    const HandleLogin = e => {
      e.preventDefault()
        loginUser({email: email, password: pass}, (dat)=>{
            if(dat.message)
              setError(dat.message)
              else{
                setAuthUser(dat); 
                console.log('token func', dat)
                setToken({email:email, token: Math.floor(Math.random() * Math.floor(100)), username: dat.username});
              }
        })
    }

    useEffect(() => {
        console.log('very new auth user', authUser);
    }, [authUser])

    return (
      <div className="limiter">
          {
            error?
              <div className="alert alert-danger" role="alert">
                Error: {error}
              </div>
          : <></>
          }

          {
              authUser ? 
              <Redirect to={`/wellcome/${authUser.username}`} /> : null
          }

          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-form-title" style={{backgroundImage: `url(images/bg-01.jpg)`}}>
                <span className="login100-form-title-1">
                  Sign In
                </span>
              </div>

              <form className="login100-form validate-form" onSubmit={(e)=> HandleLogin(e)}>
                <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                  <span className="label-input100">Email</span>
                  <input className="input100" type="email" name="username" placeholder="Enter email" id="emailinput"  onChange={(e)=> {setEmail(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                  <span className="label-input100">Password</span>
                  <input className="input100" type="password" name="pass" placeholder="Enter password" id="passinput" onChange={(e)=> {setPass(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="flex-sb-m w-full p-b-30">
                  <div>
                    <a href="/register" className="txt1">
                      Register
                    </a>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login

      