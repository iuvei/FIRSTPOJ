import request from '@/utils/request'

var User = {
	getList(){
		return request({
		    url: '/websocket/onlineuser',
		    method: 'get'
	  	});
	},
	getNumberInfo(data) {
		return request({
			url: '/userInfo?userId=' + data
		})
	}
}
export default User;