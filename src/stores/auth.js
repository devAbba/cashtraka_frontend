import { defineStore } from "pinia";
import axios from 'axios';
import toast from "../utils/toast";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authStatus: null,
        authErrors: [],
        registrationErrors: [],
        passwordResetErrors: []
    }),
    getters: {
        user: (state) => state.authUser,
        status: (state) => state.authStatus,
        errors: (state) => state.authErrors,
        errors_reg: (state) => state.registrationErrors,
        errors_pass_reset: (state) => state.passwordResetErrors, 
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password
                });
                this.router.push('/');
            } catch (error){
                if (error.response.status === 422){
                    this.authErrors = error.response.data.errors
                }
            }
        },
        async handleRegister(data) {
            await this.getToken();
            this.registrationErrors = [];
            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                });
                this.router.push('/');
            } catch (error){
                if (error.response.status === 422){
                    this.registrationErrors = error.response.data.errors
                }
            }   
        },
        async handleLogout() {
            await axios.post('/logout');
            this.authUser = null;
        },
        async handleForgotPassword(data){
            this.passwordResetErrors = [];
            await this.getToken();
            
            try {
                const response = await axios.post('/forgot-password', {
                    email: data.email
                });

                // toast status message
                toast.info(response.data.status);
                
            } catch (error) {
                if (error.response.status === 422){
                    this.passwordResetErrors = error.response.data.errors
                }
            }
        },
        async handleResetPassword(data){
            this.authErrors = [];
            await this.getToken();

            try {
                await axios.post('/reset-password', data);
                this.router.push('/login');
            } catch (error){
                if (error.response.status === 422){
                    this.authErrors = error.response.data.errors
                }
            }
        }
    }
});