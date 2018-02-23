/**
 * Notice相关
 */

//loading
import BILoading from '../components/BI-loading'
import BILoadingDemo from '../demos/BI-loading'

//toast
import BIToast from '../components/BI-toast'
import BIToastDemo from '../demos/BI-toast'

//confirm
import BIConfirm from '../components/BI-confirm'
import BIConfirmDemo from '../demos/BI-confirm'

const routes = [
	{
		path: '/loading',
		component: BILoading
	},
	{
		path: '/loading-demo',
		component: BILoadingDemo
	},
	{
		path: '/toast',
		component: BIToast
	},
	{
		path: '/toast-demo',
		component: BIToastDemo
	},
	{
		path: '/confirm',
		component: BIConfirm
	},
	{
		path: '/confirm-demo',
		component: BIConfirmDemo
	}
]

export default routes