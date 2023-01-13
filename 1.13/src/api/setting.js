import http from '../untils/http'
/**设置 */
export  function setting(params){
	return http({
		url:http.apis("/sys/role?"),
		method:"get",
		params
	 })
}
/**添加 */
export  function add(params){
	return http({
		url:http.apis("/sys/role"),
		method:"post",
		params
	 })
}
/**编辑*/
export  function edit(data){
	return http({
		url:http.apis("/sys/role/"+data.id),
		method:"PUT",
		data,
	 })
}
/**删除*/
export  function setDel(params){
	return http({
		url:http.apis("/sys/role/"+params),
		method:"DELETE",
	 })
}
/**公司信息 */
export  function set(){
	return http({
		url:http.apis("/company/1"),
		method:"get",
	 })
}
