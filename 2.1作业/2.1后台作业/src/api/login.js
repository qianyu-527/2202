import http from '../untils/http'
// 请求登录
export function Login(params){
	return http({
		url:http.apis("/sys/login"),
		method:"POST",
		params
	})
}
