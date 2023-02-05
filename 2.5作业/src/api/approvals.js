import http from '../untils/http'
/**审批 */
export function approvals(){
 return http({
	url:http.apis("/user/process/instance/1/10"),
	method:"put",
 })
}
/**请假申请 */
export function leaveApproval(data){
	return http({
	 url:http.apis(`/user/process/instance/${data}`),
	 method:"get",
	})
 }
/**请假申请 */
export function leave(data){
	return http({
	 url:http.apis(`/user/process/instance/tasks/${data}`),
	 method:"get",
	})
 }
