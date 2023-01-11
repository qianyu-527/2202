import http from '../untils/http'
/**登录 */
export function Login(params){
 return http({
	url:http.apis("/sys/login"),
	method:"POST",
	data:params,
 })
}
