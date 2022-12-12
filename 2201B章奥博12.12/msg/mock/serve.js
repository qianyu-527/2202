let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
let app = express() //实例化express

// 登陆接口
app.use("/login", function (req, res) {
  // console.log(req, "req")
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
const menusDate=require('./common/menus.json')
//侧边栏
app.use("/menus",function(req,res){
	// console.log(req,'req');
	res.json(
		Mock.mock({
			...menusDate
		})
	)
})
const usersDate=require('./common/users.json')
//用户列表
app.use("/users",function(req,res){
	// console.log(req,'req');
	res.json(
		Mock.mock({
			...usersDate
		})
	)
})
const rolesDate=require('./common/roles.json')
//用户列表
app.use("/roles",function(req,res){
	// console.log(req,'req');
	res.json(
		Mock.mock({
			...rolesDate
		})
	)
})
app.listen("8090", () => {
  console.log("监听端口 8090")
})
