import request from '@/utils/request'

const redbag = {
    getBalance(){
		return request({
		    url: '/userInfo/mymoney',
		    method: 'post'
	  	});
	},
	send(data){
		return request({
		    url: '/redpacket/send',
		    method: 'post',
		    data
	  	});
	},
	grab(id){
		return request({
		    url: '/redpacket/receive',
		    method: 'post',
		    data:{
		    	redpacketId:id
		    }
		})
	},
	getMyRed(){
		return request({
		    url: '/redpacket/userRedpack',
		    method: 'post'
		});
	},
	getStutas(data) {
		return request({
			url: '/redpacket/status',
			method: 'post',
			data
		})
	},
	getDetail(data) {
		return request({
			url: '/redpacket/detail',
			method: 'post',
			data
		})
	},
	getHistory(data) {
		return request({
			url: '/msg/chatroomHisMsg?timestamp='+data+'&min=10',
		})
	} 
}

export default redbag;
