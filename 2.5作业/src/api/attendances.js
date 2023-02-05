import http from '../untils/http'

/*表格 */
export  function car(data){
	return http({
		url:http.apis(`/attendances?${data}`),
		method:"get",
	 })
}
/*2023报表 */
export  function list(){
	return http({
		url:http.apis('/attendances/reports'),
		method:"get",
	 })
}
