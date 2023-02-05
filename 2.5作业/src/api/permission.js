import http from '../untils/http.js'
// 权限管理数据
export function permission(data){
	return http({
		url:http.apis("/sys/permission"),
		method:"GET",
		data
	})
}
// 添加
export function add(data){
	return http({
		url:http.apis('/sys/permission'),
		method:"POST",
		data
	})
}
// 删除
export function del(data){
	return http({
		url:http.apis(`/sys/permission/${	data}`),
		method:"DELETE",
	})
}

