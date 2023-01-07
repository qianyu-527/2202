import { http, api } from '../http';

/**登录 */
export function Login(data: { mobile: string; password: string }) {
	return http({
		url: api('/sys/login'),
		method: 'post',
		data: data,
	});
}
/**考勤 */
export function attendances() {
	return http({
		url: api('/attendances?page=1&pagesize=10'),
		method: 'get',
	});
}
/**工资的*/
export function company() {
	return http({
		url: api('/salarys/list'),
		method: 'POST',
	});
}

