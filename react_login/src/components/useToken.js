import { useState, useEffect } from 'react';

const useToken = () => {
    const getToken = () => {
        const rawtoken = localStorage.getItem('token');
        //console.log('raw token', rawtoken);
        const userToken = JSON.parse(rawtoken);
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