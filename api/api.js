//封装请求
// 面向对象 es6 Promise

//引入提示
import {errdata} from './errdata.js'
//get
let listing = function(urlIng){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urlIng,//'https://bird.ioliu.cn/joke/rand'
			method:'GET'
		}).then((res)=>{
			// let errs = '正确结果'
			// errdata.errlist(errs)
			//正确不显示弹窗
			resolve(res)
		}).catch((err)=>{
			let errs = '服务器错误稍后再试'
			errdata.errlist(errs)
			reject(err)
		})
	})
}
export {listing} 