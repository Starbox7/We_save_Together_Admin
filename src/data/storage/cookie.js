import { useCookies } from 'react-cookie';

export const useCookieFunctions = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const saveTokens = (accessToken, refreshToken) => {
        setCookie('accessToken', accessToken, { path: '/' });
        setCookie('refreshToken', refreshToken, { path: '/' });
    };

    const removeTokens = () => {
        removeCookie('accessToken', { path: '/' });
        removeCookie('refreshToken', { path: '/' });
    };

    const getToken = () => {
        const accessToken = cookies.accessToken;
        const refreshToken = cookies.refreshToken;
        return { accessToken, refreshToken };
    };

    return { saveTokens, removeTokens, getToken };
};
