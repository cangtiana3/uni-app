<template>
	<view class="context">
		<search></search>
		<preference :predata="predata"></preference>
		<title></title>
		<view @click="pull()">
			<delicacy id="box" :class="{'top':isTop}"></delicacy>
		</view>
		<takeout></takeout>
	</view>
</template>

<script>
	import Search from './components/serach.vue'
	import Preference from './components/preference.vue'
	import Title from './components/title.vue'
	import Delicacy from './components/delicacy.vue'
	import Takeout from './components/takeout.vue'
	//引入接口
	import {listing} from '../../api/api.js'
	//引入请求地址
	import {getPre} from '../../api/request.js'
	export default {
		data() {
			return {
				predata:[],
				menutop:'',
				rect:"",
				topdata:0,
				isTop:false
			}
		},
		methods: {
			//为你优选
			pre(){
				listing(getPre)//接口中写好的地址
				.then((res)=>{
					// console.log(res[1].data.data)
					this.predata=res[1].data.data
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			pull(){
				wx.pageScrollTo({
					scrollTop:this.topdata,
					duration:300
				})
			}
		},
		components:{
			Search, 
			Preference,
			Title,
			Delicacy,
			Takeout 
		},
		mounted(){
			this.pre()
		},
		onLoad(){
			const that=this
			const query = wx.createSelectorQuery()
			query.select('#box').boundingClientRect()
			query.selectViewport().scrollOffset()
			query.exec((res)=>{
				that.menutop =  res[0].top
				that.topdata = res[0].top
			  // res[1].scrollTop 
			})

		},
		onPageScroll(e){
			// 监听页面滚动
			this.rect = e.scrollTop	
		},
		//计算属性  时刻监听
		computed:{
			namepage(){
				// console.log('时刻监.听')

				if(this.rect > this.menutop){
					this.isTop = true
				}else{
					this.isTop = false
				}
			}
		}
	}
</script>

<style scoped>
	.context{
		margin: 0 15upx;
	}
	.top{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}
	.aa{
		height: 2000upx;
		background: red;
	}
</style>
