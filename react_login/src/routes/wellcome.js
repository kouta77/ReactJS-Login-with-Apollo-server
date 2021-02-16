import { useParams } from 'react-router-dom';
import { useState } from 'react'
import useToken from '../components/useToken';

const Wellcome = () => {
    const { token, setToken} = useToken();
    const [preview, setPreview] = useState();

    const onClose = () => {
        setPreview(null)
      }
    
    const onCrop = (preview) => {
        setPreview(preview)
      }

    return(
        <>
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form-title" style={{backgroundImage: `url(images/bg-01.jpg)`}}>
                        <span className="login100-form-title-1">
                        Wellcome!
                        </span>
                    </div>
                    <div style={{textAlign: 'center', padding: 20}}>
                        <img style={{borderRadius: 80, width: 150, height: 150}} src={ token?.user.avatar } />
                    </div>

                    <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}} className="login100-form validate-form">
                            <h1>{token?.user.username}</h1>

                            <a href="/login" onClick={()=> {localStorage.removeItem('token'); console.log('logout')}} className="txt1">
                            Log out
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wellcome;