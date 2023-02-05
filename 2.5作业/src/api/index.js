import http from '../untils/http'

export function index(params){
	return http({
		url:http.apis('/sys/user/'+params),
		method:"GET",
	})
}
