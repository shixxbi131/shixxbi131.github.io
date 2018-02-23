/**
 * layout相关
 */

//pagination
import BIPagination from '../components/BI-pagination'
import BIPaginationDemo from '../demos/BI-pagination'

//dialog
import BIDialog from '../components/BI-dialog'
import BIDialogDemo from '../demos/BI-dialog'

const routes = [
	{
		path: '/pagination',
		component: BIPagination
	},
	{
		path: '/pagination-demo',
		component: BIPaginationDemo
	},
	{
		path: '/dialog',
		component: BIDialog
	},
	{
		path: '/dialog-demo',
		component: BIDialogDemo
	}
]

export default routes