import axios from 'axios'
import Cookie from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000, // 请求超时时间
  withCredentials:true  //指示是否跨站点访问控制请求
})
// request拦截器
service.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  	config.headers['token'] = Cookie.getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
  	return config
}, error =>{
	// Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(response =>{
	const res = response.data
	if (res.code !== 0) {
		if(res.code !== 501){
          $toast.show(error.message || error.msg, 1500);
        }
        return Promise.reject(res) //抛出异常
	} else {
      return response.data
    }
},error =>{
  	$toast.show(error.message || error.msg, 1500);
    return Promise.reject(error)
});

export default service