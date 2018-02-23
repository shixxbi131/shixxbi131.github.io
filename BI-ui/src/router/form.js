//form相关

//button
import BIButton from '../components/BI-button'
import BIButtonDemo from '../demos/BI-button'

//input
import BIInput from '../components/BI-input'
import BIInputDemo from '../demos/BI-input'

//select
import BISelect from '../components/BI-select'
import BISelectDemo from '../demos/BI-select'

//textarea
import BITextarea from '../components/BI-textarea'
import BITextareaDemo from '../demos/BI-textarea'

import BIUpload from '../components/BI-upload'
import BIUploadDemo from '../demos/BI-upload'

const routes = [
	{
		path: '/button',
		component: BIButton
	},
	{
		path: '/button-demo',
		component: BIButtonDemo
	},
	{
		path: '/input',
		component: BIInput
	},
	{
		path: '/input-demo',
		component: BIInputDemo
	},
	{
		path: '/select',
		component: BISelect
	},
	{
		path: '/select-demo',
		component: BISelectDemo
	},
	{
		path: '/textarea',
		component: BITextarea
	},
	{
		path: '/textarea-demo',
		component: BITextareaDemo
	},
	{
		path: '/upload',
		component: BIUpload
	},
	{
		path: '/upload-demo',
		component: BIUploadDemo
	}
]

export default routes