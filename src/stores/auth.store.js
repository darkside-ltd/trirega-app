import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = import.meta.env.VITE_AUTH_API_URL;
// console.log({baseUrl})

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email, password) {
            const user = await fetchWrapper.post(`${baseUrl}/api/auth/login`, { email, password });

            console.log({user})

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            console.log('logout function')
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
