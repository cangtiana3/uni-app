//提示
const errdata = {
	errlist(err){
		uni.showToast({
			icon:'none',
		    title: err,
		    duration: 3000,
			//3秒小时
		});
	}
}
export {errdata}