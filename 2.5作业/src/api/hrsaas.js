import http from '../untils/http'
/**部门 */
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
/*社保设置表格 */
export  function clear(){
	return http({
		url:http.apis("/social_securitys/historys/202004?month=202004&opType=1"),
		method:"get",
	 })
}
