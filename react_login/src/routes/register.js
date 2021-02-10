import React,{useState, useEffect} from 'react'
import {registerUser} from '../backend/userMutations'
import {Redirect} from 'react-router-dom'

const register = () => {
    const [error, setError] = new useState('');
    const [name, setName] = new useState('');
    const [email, setEmail] = new useState('');
    const [pass, setPass] = new useState('');
    const [pass2, setPass2] = new useState('');
    const [finished, setFinished] = new useState('');

    const handleRegister = (e) => {
      e.preventDefault();

      let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      let validName = name.match(/^[a-zA-Z]+$/);
      let validPassword = pass===pass2? true : false

      console.log('name val', validName);

      if(!emailValid){
        setError('invalid email!')
        return null
      }

      if(!validName){
        setError('invalid name!')
        return null
      }

      if(!validPassword){
        setError(`Passwords don't match!`)
        return null
      }

      registerUser({username: name, email: email, password: pass}, (dat)=>{
        console.log('REGISTERED')
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

              <form className="login100-form validate-form "  onSubmit={(e) => { handleRegister(e)}}>   
                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                  <span className="label-input100">Username</span>
                  <input className="input100" type="text" name="username" placeholder="Enter username" id="nameinput" required onChange={(e)=> {setName(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                  <span className="label-input100">Email</span>
                  <input className="input100" type="email" name="email" placeholder="Enter email" id="emailinput" required onChange={(e)=> {setEmail(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                  <span className="label-input100">Password</span>
                  <input className="input100" type="password" name="pass" placeholder="Enter password" id="passinput" required onChange={(e)=> {setPass(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                  <span className="label-input100">Repeat Password</span>
                  <input className="input100" type="password" name="pass2" placeholder="Repeat password" id="passinput2" required onChange={(e)=> {setPass2(e.target.value)}}></input>
                  <span className="focus-input100"></span>
                </div>

                <div className="flex-sb-m w-full p-b-30">

                  <div>
                    <a href="/login" className="txt1">
                      Login
                    </a>
                  </div>
                </div>
                {/* onClick={() => { handleRegister()}} */}
                <div className="container-login100-form-btn">
                  <button  type="submit" id="loginbtn" className="login100-form-btn">
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