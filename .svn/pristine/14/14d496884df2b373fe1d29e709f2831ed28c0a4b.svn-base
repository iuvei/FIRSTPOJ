import request from '@/utils/request'
var Login = {
	loginUser(data){
		return request({
		    url: '/login',
		    method: 'post',
		    data
	  	});
	},
	getInfo(){
		return request({
		    url: '/userInfo',
		    method: 'get'
		 })
	},
	logout(){
		return request({
		    url: '/logout',
		    method: 'post'
		})
	}
}

export default Login;