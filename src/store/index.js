import {createStore} from "vuex";
import TokenService from "@/services/token.service";

export default createStore({
    state: {
        auth: {
            username: 'vue',
            password: 'vue'
        },
        user: {
            name: 'Ali',
            family: 'Mohammadi',
            email: 'ali@mohammadi.com'
        }
    },
    getters: {
        currentUser(state) {
            return state.user;
        },
        isAuthenticated() {
            return !!TokenService.getToken();
        }
    },
    actions: {
        login(context, params) {
            return new Promise((resolve, reject) => {
                if (context.state.auth.username !== params.email) {
                    reject({status: false, message: 'Username or email is incorrect.'});
                }
                if (context.state.auth.password !== params.password) {
                    reject({status: false, message: 'Password is incorrect.'});
                }
                var itoken = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
                var response = {status: true, ...context.state.user, token: itoken};

                context.commit('setUser', response);
                resolve(response);
            });
        },
        logout(context) {
            return new Promise((resolve) => {
                context.commit('logOut');
                resolve({status: true, message: 'You have successfully logged out.'});
            });
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            TokenService.saveToken(user.token);
        },
        logOut(state) {
            state.isAuthenticated = false;
            state.user = {};
            state.errors = {};
            TokenService.destroyToken();
        }
    }
});