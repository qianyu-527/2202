import http from '../untils/http'
// 请求登录
export function Login(data){
	return http({
		url:http.apis("/sys/login"),
		method:"POST",
		data
	})
}
