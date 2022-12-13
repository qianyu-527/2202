import http from "../untils/http";
//用户列表
export const getUser=(params)=>{
	return http.send('/users',params).then(res=>res.data)
}

