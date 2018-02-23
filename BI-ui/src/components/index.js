import BIButton from './BI-button'
import BILoading from './BI-loading'
import BIToast from './BI-toast'
import BIPagination from './BI-pagination'
import BIConfirm from './BI-confirm'
import BITable from './BI-table'
import BIInput from './BI-input'
import BISelect from './BI-select'
import BITextarea from './BI-textarea'
import BIDialog from './BI-dialog'
import BIUpload from './BI-upload'

let BI = {
	[BIButton.name]: BIButton,
	[BILoading.name]: BILoading,
	[BIToast.name]: BIToast,
	[BIPagination.name]: BIPagination,
	[BIConfirm.name]: BIConfirm,
	[BITable.name]: BITable,
	[BIInput.name]: BIInput,
	[BISelect.name]: BISelect,
	[BITextarea.name]: BITextarea,
	[BIDialog.name]: BIDialog,
	[BIUpload.name]: BIUpload
};

function install(Vue) {
	Object.keys(BI).forEach((key)=>{
		Vue.component(key, BI[key]);
	});
}

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install);
}

export default install