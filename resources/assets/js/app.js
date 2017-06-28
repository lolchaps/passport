
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

router.beforeEach (
	(to, from, next) => {
		if (to.matched.some(record => record.meta.forVisitors)) {
			if (Vue.auth.isAuthenticated()) {
				next({
					path: '/dashboard'
				})
			} else {
				next()
			}
		}
		else if (to.matched.some(record => record.meta.forAuth)) {
			if ( ! Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else {
				next()
			}
		}
		 else {
			next()
		}
	}
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('login', require('./components/Login.vue'));

const app = new Vue({
    el: '#app',

    router: router
});
