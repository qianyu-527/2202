import http from '../untils/http'
/**权限管理 */
export  function permission(){
	return http({
		url:http.apis("/sys/permission"),
		method:"get",	
	 })
}
