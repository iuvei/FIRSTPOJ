import Cookie from '@/utils/auth'

export default {
	state:{
		showInfo: false,
		isLogin: false,
		userInfo:{
			userid:'',
			nickname:'',
			headimage:'default.gif',
			userdegree:0,
			userflag:1
		},
		status:'',
		token:Cookie.getToken(),
		name:'',
		roles: [],
		avatar:'',
		timer: [],
		redBagStutas: '',
		redBagId: '',
	},
	mutations:{
		UPDATE_ID(state, newid) {
			state.redBagId = newid
		},
		UPDATE_STD(state, newstd) {
			state.redBagStutas = newstd
		},
		SET_INFO(state, bool) {
			state.showInfo = bool
		},
		SET_LOGIN(state, bool){
			state.isLogin = bool
		},
		SET_TOKEN: (state, token) => {
	      state.token = token
	    },
	    SET_ROLES: (state, roles) => {
	      state.roles = roles
	    },
	    SET_NAME: (state, name) => {
	      state.name = name
	    },
	    SET_STATUS: (state, status) => {
	      state.status = status
	    },
	    SET_USER_INFO:(state, userinfo)=>{
	    	state.userInfo = userinfo
		},
		SET_TIME(state, newTime) {
			state.timer.push(newTime)
		}
	},
	actions:{
	    
	}
}