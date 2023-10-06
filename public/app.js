var app = new Vue({
    el: '#app',
    router: (new VueRouter({
	routes: [
	    { path: '/',  component: httpVueLoader('components/index.vue') },
    	],
    })),
    data(){
	return {
	}
    },
    async mounted(){
    },
    methods: {
    },
    components: {
    },
    filters: {
    }    
});
