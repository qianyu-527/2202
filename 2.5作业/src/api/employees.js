import http from '../untils/http'
/**员工 */
export  function employees(params){
	return http({
		url:http.apis("/sys/user?"),
		method:"get",
		params
	 })
}
/**角色 */
export  function role(params){
	return http({
		url:http.apis("/sys/user/"+params),
		method:"get",
	 })
}
/**登录账户设置 */
export  function add(params){
	return http({
		url:http.apis("/sys/user/"+params),
		method:"PUT",
	 })
}

