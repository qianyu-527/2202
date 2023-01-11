import http from '../untils/http'
/**审批 */
export function approvals(){
 return http({
	url:http.apis("/user/process/instance/1/10"),
	method:"put",
 })
}
