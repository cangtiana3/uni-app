<template>
	<view>
		<!-- 定位 -->
		<view class="search-view">
			<img src="../../../static/img/定位.png" alt="">
			<text class="search-text">阿里巴巴吧XXXX</text>
			<text class="search-text">></text>
		</view>
		<!-- 搜索框 -->
		<view class="search-cont">
			<view class="search" @click="search()">
				<img class="search-img" src="../../../static/img/search.png" alt="" mode="widthFix" />
				<input class="search-text" type="text" placeholder="麻辣烫" disabled=""/>
			</view>
		</view>
		<!-- 轮播 -->
		<view class="page-section-spacing">
			<swiper class="swiper" 
				:circular="true"
				:duration="200"
				@change="banner">
				<block v-for="item,index in label" :key="index">
					<swiper-item class="swiper-item">
						<view class="swiper-item">
							<block v-for="listdata,ind in item" :key="ind">
								<view class="swiper-img">
									<img class="swiper-img-img" :src="listdata.img" mode="widthFix" 
									 style="width: 80upx;height: 80upx;">
									<text>{{listdata.title}}</text>
								</view>
							</block>
						</view>
					</swiper-item>
				</block>
				
			</swiper>
		</view>
		<!-- 指示点 -->
		<view class="instruct-view">
			<view class="instruct" 
				v-for="item,index in instuctdata" 
				:key="index"
				:class="{active:index== num}">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// 轮播
				instuctdata:['',''],
				num:0,
				label:[
					[
						{
							'img':'../../../static/img/meishi.png',
							'title':'美食'
						},
						{
							'img':'../../../static/img/超市.png',
							'title':'超市便利'
						},
						{
							'img':'../../../static/img/-fen-.png',
							'title':'蔬菜蔬果'
						},
						{
							'img':'../../../static/img/团购.png',
							'title':'美团转送'
						},
						{
							'img':'../../../static/img/跑.png',
							'title':'跑腿代送'
						},
						{
							'img':'../../../static/img/甜品.png',
							'title':'甜品'
						},
						{
							'img':'../../../static/img/烧烤.png',
							'title':'烧烤'
						},
						{
							'img':'../../../static/img/蛋糕.png',
							'title':'蛋糕'
						},
						{
							'img':'../../../static/img/小吃.png',
							'title':'夜宵'
						},
						{
							'img':'../../../static/img/龙虾.png',
							'title':'龙虾'
						},
					],
					[
						{
							'img':'../../../static/img/披萨.png',
							'title':'汉堡披萨'
						},
						{
							'img':'../../../static/img/料理百科.png',
							'title':'日韩料理'
						},
						{
							'img':'../../../static/img/麻辣烫.png',
							'title':'麻辣烫'
						},
						{
							'img':'../../../static/img/简餐.png',
							'title':'快是简餐'
						},
						{
							'img':'../../../static/img/鲜花.png',
							'title':'浪漫鲜花'
						},
						{
							'img':'../../../static/img/小吃.png',
							'title':'小吃'
						},
						{
							'img':'../../../static/img/饺子.png',
							'title':'饺子'
						},
						{
							'img':'../../../static/img/煲仔饭.png',
							'title':'煲仔饭'
						},
						{
							'img':'../../../static/img/日料.png',
							'title':'烤鱼'
						},
						{
							'img':'../../../static/img/其他服务业 .png',
							'title':'其他'
						}
					]
				]
			}
		},
		methods:{
			banner(e){
				// console.log(e.detail.current)
				this.num=e.detail.current
			}
		}
	}
</script>

<style scoped>
	.swiper{
		height: 312upx;
	}
	.search-view{
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.search-view img{
		width: 35upx;
		height: 30upx;
	}
	.search-text{
		padding: 0 10upx;
	}
	.search{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius: 10upx;
	}
	.search input{
		height: 70upx;
		line-height: 70upx;
		font-size: 25upx;
		color: #666666;
	}
	.search-img{
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
	}
	.swiper-item{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.swiper-img{
		width: calc((100%/5))!important;
		margin: 6px 0;
		position: relative;
		text-align: center;
	}
	.swiper-img text{
		padding-top: 20upx;
		font-size: 25upx;
	}
	.swiper-img-img{
		width: 70upx;
		height: 70upx;
		border-radius: 50upx;
	}
	.swiper-img text{
		display: block;
	}
	.instruct-view{
		text-align: center;
		display: flex;
		justify-content: center;
		padding-top: 10upx;
	}
	.instruct{
		background: #C0C0C0;
		border-radius: 10upx;
		height: 15upx;
		width: 40upx;
		margin: 10upx 10upx 0;
	}
	.active{
		background: #F0AD4E;
	}
</style>
