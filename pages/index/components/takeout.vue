<template>
	<view>
		<view class="goodslist" 
			v-for="item,index in goods" 
			:key="index">
			<view class="goods-img">
				<img :src="item.testurl" alt="">
			</view>
			<block  v-for="items in item.list">
				<view class="goodslist-text">
					<view class="goodslist-title">{{items.title}}</view>
					<view class="goodslist-num">
						<text>月销{{items.month}}</text>
						<text>约{{items.time}}分钟</text>
					</view>
					<view class="goodslist-titme">
						<text>起送￥{{items.money}}</text>
						<text>配送费￥{{items.money2}}</text>
						<text>人均{{items.money3}}</text>
					</view>
					<view class="goodslist-titme2">
						<img :src="items.listurl" alt="">
						<text>{{items.goodsname}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goods:[
					{
						"list":[
							{
								"title":"深夜食堂",
								"month":"200",
								"time":40,
								"money":2,
								"money2":0,
								"money3":19,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"烧烤"
							}
						],
						"testurl":"../../../static/img/shaokao.jpg"
					},
					{
						"list":[
							{
								"title":"东北特色",
								"month":"100",
								"time":30,
								"money":3,
								"money2":0,
								"money3":24,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"饺子"
							}
						],
						"testurl":"../../../static/img/meishi/0.jpg"
					},
					{
						"list":[
							{
								"title":"甜点",
								"month":"100",
								"time":30,
								"money":3,
								"money2":0,
								"money3":100,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"蛋糕"
							}
						],
						"testurl":"../../../static/img/meishi/2.jpg"
					},
					{
						"list":[
							{
								"title":"深夜食堂",
								"month":"200",
								"time":40,
								"money":2,
								"money2":0,
								"money3":19,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"烧烤"
							}
						],
						"testurl":"../../../static/img/shaokao.jpg"
					},
					{
						"list":[
							{
								"title":"东北特色",
								"month":"100",
								"time":30,
								"money":3,
								"money2":0,
								"money3":24,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"饺子"
							}
						],
						"testurl":"../../../static/img/meishi/0.jpg"
					},
					{
						"list":[
							{
								"title":"甜点",
								"month":"100",
								"time":30,
								"money":3,
								"money2":0,
								"money3":100,
								"listurl":"../../../static/img/烧烤.png",
								"goodsname":"蛋糕"
							}
						],
						"testurl":"../../../static/img/meishi/2.jpg"
					},
				]
			}
		}
	}
</script>

<style scoped>
	.goodslist{
		display: flex;
		margin-top: 20upx;
	}
	.goods-img img{
		flex: 1;
		width: 215upx;
		height: 215upx;
		border-radius: 5upx;
	}
	.goodslist-text{
		flex: 1;
		margin: 5upx 0 5upx 20upx;
		border-bottom: 1px solid #C0C0C0;
		box-sizing: border-box;
	}
	.goodslist-text text{
		line-height: 55upx;
	}
	.goodslist-text text:last-child{
		text-align: right;
	}
	.goodslist-title{
		font-size: 35upx;
		font-weight: bold;
	}
	.goodslist-num,.goodslist-titme,.goodslist-titme2{
		color: #999999;
		font-size: 25upx;
	}
	.goodslist-num{
		display: flex;
		justify-content: space-between;
	}
	.goodslist-num text{
		vertical-align: center;
		flex:1;
	}
	.goodslist-titme text:nth-child(2){
		margin: 0 50upx;
	}
	.goodslist-titme2{
		display: flex;
		align-items: center;
	}
	.goodslist-titme2 img{
		width: 25upx;
		height: 25upx;
		padding-right: 10upx;
	}
	
	
</style>
