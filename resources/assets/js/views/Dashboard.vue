<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    Dashboard page..
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                users: [],
            };
        },

        mounted() {
            this.getUsers();
        },

        methods: {
            getUsers() {
                axios.get('/api/users')
                    .then(users => {
                        console.log(users);
                    });
            }
        }
    }
</script>
