
import * as data from './data'

export default{

	UPDATE_HEAD:({commit})=>{
		commit(data.UPDATE_HEAD);
	},
	UPDATE_LOADING:({commit})=>{
		commit(data.UPDATE_LOADING);
	},
	UPDATE_FOOTER:({commit})=>{
		commit(data.UPDATE_FOOTER)
	},
	UPDATE_PAGE_TITLE:({commit})=>{
		commit(data.UPDATE_PAGE_TITLE)
	},
	UPDATE_MSG:({commit})=>{
		commit(data.UPDATE_MSG)
	},
	MINE_INFO:({commit})=>{
		commit(data.MINE_INFO)
	},
	ACTIVE_TYPE:({commit})=>{
		commit(data.ACTIVE_TYPE)
	}
}
