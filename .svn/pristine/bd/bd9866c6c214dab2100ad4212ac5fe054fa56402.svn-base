import request from '@/utils/request'

var SigninApi = {
	getCheckinList(date){
		return request({
		    url: '/sign/getCheckinList',
		    method: 'post',
		    data:{
		    	date: date
		    }
	  	});
	},
	checkSigin(){
		return request({
		    url: '/sign/isqiandao',
		    method: 'get'
	  	});
	},
	checkIn(){
		return request({
		    url: '/sign/checkin',
		    method: 'get'
	  	});
	}
}

export default SigninApi;