import Vue from 'vue';
import App from './App';
import router from './router';
// import './common/common.less';
import 'normalize.css';
import BI from './components';
Vue.use(BI);

const app = new Vue({
	router,
	...App
}).$mount('#app');


