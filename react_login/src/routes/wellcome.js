import { useParams } from 'react-router-dom';
import useToken from '../components/useToken'

const Wellcome = () => {
    const { token, setToken} = useToken();
    return(
        <>
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form-title" style={{backgroundImage: `url(images/bg-01.jpg)`}}>
                        <span className="login100-form-title-1">
                        Wellcome!
                        </span>
                    </div>
                    <div className="login100-form validate-form">
                        <h1>{token?.username}</h1>
                        <div className="flex-sb-m w-full p-b-30">
                        <div>
                            <a href="/login" onClick={()=> {localStorage.removeItem('token'); console.log('logout')}} className="txt1">
                            Log out
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wellcome;