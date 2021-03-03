import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App)
}).$mount('#app');


// to attach the application to the Dom:
// el: "#app", or .$mount('#app')

// h is shorthand for createElement()


