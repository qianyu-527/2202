import http from '../untils/http'
/**员工 */
export  function employees(params){
	return http({
		url:http.apis("/sys/user?"),
		method:"get",
		params
	 })
}
