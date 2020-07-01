<template>
	<view class="boxOne">
		<view class="wrapper">
			<!-- 筛选器 -->
			<view class="delice-view">
				<view class="delice-list delica-grow" @click="multiple">
					<text>{{synthesize}}</text>
					<img src="" alt="" >
				</view>
				<view class="delica-grow" @click="sales">销量高</view>
				<view class="delica-grow" @click="sales">速度快</view>
				<view class="delica-grow" @click="sales">津贴联盟</view>
				<view class="delica-list delica-right" @click="Clicksortmen">
					<text>筛选</text>
					<!-- <img src="" alt="" mode="widthFix"> -->
				</view>
			</view>
			<!-- 综合排序筛选条件 -->
			<view class="sortlist sortlisttitle" v-if="drop">
				<block v-for="item,index in sortList" :key="index">	
					<text :class="{activeb:index == num}"
					@click="sortClick(index,item.name)">
					{{item.name}}</text>
				</block>
			</view>
			<!-- 多个筛选区 -->		
			<view class="sortlist sortlist-view" v-if="sortmen">
				<!-- 多选 -->
				<block v-for="item,index in screendata" :key="index">
					<view>
						<view class="sortlist-title">{{item.title}}</view>
						<view class="sortlist-flex">
							<block v-for="itemdata,indexs in item.datas" :key="indexs">
								<text class="Choice" 
								:class="{scractive:itemdata.id ==2}">
									{{itemdata.name}}
								</text>
							</block>
						</view>
					</view>
				</block>
				<!-- 单选  人均价格-->
				<block v-for="item,index in presson" :key="index">
					<view>
						<view class="sortlist-title">{{item.title}}</view>
						<view class="sortlist-flex">
							<block v-for="itemdata,indexs in item.datas" :key="indexs">
								<text class="Choice">{{itemdata.name}}</text>
							</block>
						</view>
					</view>
				</block>
				<!-- 置顶 -->
				<view class="sortlist-bottom">
					<view @click="emPty">清空</view>
					<view @click="flag && compLete">完成</view>
				</view>
			</view>
			
		</view>
		<!-- 阴影 -->
		<view class="yin" v-if="ying" @click="backClic()"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				synthesize:"综合排序",
				num:0,
				drop:false,
				sortmen:false,
				ying:false,
				sortList:[
					{
						"name":"综合排序",
						"screen":"_id",
						"nums":1
					},
					{
						"name":"起送价最低",
						"screen":"delivering",
						"nums":1
					},
					{
						"name":"配送费最低",
						"screen":"physical",
						"nums":1
					},
					{
						"name":"人均最低",
						"screen":"capita",
						"nums":1
					},
					{
						"name":"人均最高",
						"screen":"capita",
						"nums":1
					},
				],
				screendata:[
					{
						"title":"商家特色(可多选)",
						"datas":[
							{
								"id":1,
								"sign":"duration",
								"name":"配送最快"
							},
							{
								"id":1,
								"sign":"deliver",
								"name":"0元起送"
							},
							{
								"id":1,
								"sign":"physi",
								"name":"免配送费"
							}
						]
					},
					{
						
					},
					{
						
					}
				],
				// 人均价格筛选
				presson:[
					{
						"title":"人均",
						datas:[
							{
								"name":"20元以下",
								"per":{
									"$lt":20
								}
							},
							{
								"name":"20-40元",
								"per":{
									"$lte":40,
									"$gte":20
								}
							},
							{
								"name":"40元以上",
								"per":{
									"$gt":40,
								}
							},
						],
					}
				]
			}
		},
		methods:{
			//综合人排序
			multiple(){
				this.drop =true
				this.backOne()
				this.sortmen=false
			},
			//排序替换
			sortClick(index,name){
				this.synthesize=name
				this.num = index
				this.backClic()
			},
			//销量高，熟读快，津贴联盟
			sales(){
				this.backClic()
			},
			//筛选
			Clicksortmen(){
				this.drop = false
				this.sortmen = true
				this.backOne()
			},
			//阴影
			backOne(){
				setTimeout(()=>{
					this.ying=true
				},300)
			},
			backClic(){
				this.ying = false
				this.drop = false
				this.sortmen = false
			}
		}
	}
</script>

<style scoped>
	.boxOne{
		line-height: 70upx;
		height: 70upx;
	}
	.wrapper{
		background: rgba(0,0,0,.2);
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 9999;
	}
	.delice-view{
		font-size: 30upx;
		display: flex;
		align-items: center;
		color: #666666;
		height: 70upx;
		padding: 0 15upx;
		background: #ffffff;
	}
	.delice-view img{
		width: 30upx;
		height: 30upx;
		display: block;
	}
	.delice-list{
		display: flex;
		align-items: center;
	}
	.delica-right{
		justify-content: flex-end;
		flex-grow: 5;
	}
	.delica-grow{
		flex-grow: 1;
	}
	/* 排序 */
	.sortlist{
		background: #FFFFFF;
	}
	.sortlisttitle text{
		padding: 0 15upx;
		display: block;
		font-size: 30upx;
		height: 70upx;
		line-height: 70upx;
		border-top: 1px solid #ededed;
	}
	.activeb{
		color: #f89903;
	}
	/* 多选相对定位 */
	.sortlist-view{
		height: 700upx;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
	}
	.sortlist-title{
		padding: 0 15px;
		font-size: 30upx;
		height: 60upx;
		line-height: 60upx;
	}
	.Choice{
		font-size: 28upx;
		background-color: #f8f8f8;
		height: 55upx;
		line-height: 55upx;
		color: #666666;
		width: calc((100%/3.3));
		margin: 7.5px 11.5upx;
		text-align: center;
		display: block;
		border-radius: 5upx;
	}
	.sortlist-flex{
		display: flex;
		flex-wrap:wrap ;
		align-items: center;
		margin-bottom: 30upx;
	}
	.sortlist-bottom{
		text-align: center;
		background: #ffffff;
		height: 80upx;
		line-height: 80upx;
		border-top: 1px solid #e4e4e4;
		display:flex ;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.sortlist-bottom view{
		flex:1;
	}
	.sortlist-bottom view:nth-child(1){	
		border-right: 1upx solid #E4E4E4;
	}
	.sortlist-bottom view:nth-child(2){
		background: #ffd348;
	}
	.scractive{
		background: #fef6df;
		color: #f29909;
	}
	.yin{
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>

