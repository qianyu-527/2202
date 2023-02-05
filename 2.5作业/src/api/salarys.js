import http from '../untils/http'

/*表格 */
export  function car(data){
	return http({
		url:http.apis("/salarys/list"),
		method:"POST",
		data
	 })
}
