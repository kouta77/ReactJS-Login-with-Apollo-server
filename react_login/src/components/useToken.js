import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken'

const useToken = () => {
    const getToken = () => {
        const rawtoken = localStorage.getItem('token');
        //console.log('raw token', rawtoken);
        let userToken = JSON.parse(rawtoken);

        if(userToken)
        {
            const onlyToken = userToken.token.replace('Bearer ', '');
    
            const decoded = jwt.decode(onlyToken);
    
            // Remove token from local storage if it's expired
            let now = new Date();
            if (decoded.exp * 1000 < now.getTime()){
                localStorage.removeItem('token');
                userToken = null;
            }
        }



        return userToken
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken)
    }

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;