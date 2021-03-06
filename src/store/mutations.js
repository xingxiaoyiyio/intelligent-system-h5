import {
	UPDATE_HEAD,
	UPDATE_LOADING,
	UPDATE_FOOTER,
	UPDATE_PAGE_TITLE,
	UPDATE_MSG,
	MINE_INFO,
	ACTIVE_TYPE,
	SHOP_INFO,
	MY_LOCATION
} from './data'

const state={
	headShow:true,
	loading:false,
	footerShow:true,
	pageTitle:'',
	showMsg:false,
	showMsgCtn:'',
	trainerInfo:'',
	activeType:1,
	mylocation:{},
	shopInfo:{},
	route:''
};


const mutations={
	/*head*/
	[UPDATE_HEAD](state,type){
		state.headShow=type;
	},
	/*loading*/
	[UPDATE_LOADING](state,type){
		state.loading=type;
	},
	/*footer*/
	[UPDATE_FOOTER](state,type){
		state.footerShow=type;
	},
	/*title*/
	[UPDATE_PAGE_TITLE](state,type){
		state.pageTitle=type;
	},
	/*showMsg*/
	[UPDATE_MSG](state,item){
		state.showMsg=item.type;
		state.showMsgCtn=item.msg;
	},
	/*trainerInfo*/
	[MINE_INFO](state,item){
		state.mineInfo=item;
	},

	/*activeType*/
	[ACTIVE_TYPE](state,type){
		state.activeType=type;
	},

	[MY_LOCATION](state,item){
		state.mylocation=item
	},

	[SHOP_INFO](state,item){
		state.shopInfo=item
	}


};

const getters={
	headShow(state){
		return state.headShow;
	},
	loading(state){
		return state.loading;
	},
	footerShow(state){
		return state.footerShow;
	},
	pageTitle(state){
		return state.pageTitle;
	},
	showMsg(state){
		return state.showMsg;
	},
	showMsgCtn(state){
		return state.showMsgCtn;
	},
	trainerInfo(state){
		return state.trainerInfo;
	},
	activeType(state){
		return state.activeType;
	},
	mylocation(state){
		return state.mylocation
	},
	shopInfo(state){
		console.log(state)
		return state.shopInfo
	}

};

const setters={
	showMsg(type){
		state.showMsg=type;
	}
}



export default{
	state,
	mutations,
	getters,
	setters
}