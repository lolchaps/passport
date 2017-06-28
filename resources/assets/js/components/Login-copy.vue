<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="/oauth/token" @submit.prevent="onLogin">

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" v-model="email" value="" required autofocus>
                            </div>

                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" v-model="password" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import {getHeader} from './../config';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            onLogin() {  
                const data = {
                    grant_type: 'password',
                    client_id: 3,
                    client_secret: 'ejE7m3lv16F83hoUMyJuHpksrC3unjnQqM3NylrX',
                    username: this.email,
                    password: this.password,
                    scope: ''
                }

                const authUser = {}

                axios.post('/oauth/token', data)
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.data);
                            authUser.access_token = response.data.access_token
                            authUser.refresh_token = response.data.refresh_token
                            window.localStorage.setItem('authUser', JSON.stringify(authUser))

                            axios.get('/api/user', {headers: getHeader()})
                                 .then(response => {
                                    console.log(response);

                                    authUser.email = response.email
                                    authUser.name = response.name

                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                 })
                        }
                    })
                    .catch (response => {
                        // List errors on response...
                    });
            }
        }
    }
</script>
