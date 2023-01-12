import http from '../untils/http'
/**社保 */
export  function department(){
	return http({
		url:http.apis("/company/department"),
		method:"get",
	 })
}
/*表格 */
export  function list(params){
	return http({
		url:http.apis("/social_securitys/list"),
		method:"post",
		params
	 })
}
