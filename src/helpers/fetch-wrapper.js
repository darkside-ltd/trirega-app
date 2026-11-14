import { useAuthStore } from '@/stores';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.access_token;
    const isApiUrl = url.startsWith(import.meta.env.VITE_AUTH_API_URL);
    // console.log({isLoggedIn},{isApiUrl})
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.access_token}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    // console.log('handle response')
    return response.text().then(text => {
        // console.log(text, response)
        let data
        
        if (!response.ok) {
            // console.log('got here')
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status)) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                // console.log('log em out')
                logout();
            }

            data = text && JSON.parse(text);
            // console.log(data)
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        data = text && JSON.parse(text);
        // console.log(data)

        return data;
    });
}    
