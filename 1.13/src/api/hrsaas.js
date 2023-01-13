import http from '../untils/http'
/**工资 */
export  function department(){
	return http({
		url:http.apis("/company/department"),
		method:"get",
	 })
}
/*表格 */
export  function list(params){
	return http({
		url:http.apis("/salarys/list"),
		method:"post",
		params
	 })
}
