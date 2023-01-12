import http from '../untils/http'
/**考勤 */
export  function department(){
	return http({
		url:http.apis("/company/department"),
		method:"get",
	 })
}
/*表格 */
export  function car(params){
	return http({
		url:http.apis("/social_securitys/list"),
		method:"post",
		params
	 })
}
