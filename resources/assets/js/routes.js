import VueRouter from 'vue-router';

let routes = [
	{
		path: '/login',
		component: require('./views/Login'),
		meta: {
			forVisitors: true
		}
	},
	{
		path: '/',
		component: require('./views/Home'),
		meta: {
			forVisitors: true
		}
	},
	{
		path: '/about',
		component: require('./views/About'),
		meta: {
			forVisitors: true
		}
	},
	{
		path: '/dashboard',
		component: require('./views/Dashboard'),
		meta: {
			forAuth: true
		}
	},
];

export default new VueRouter({
	routes,
	linkActiveClass: 'active'
});