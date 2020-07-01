<template>
	<view class="prefer-content">
		<!-- 标题 -->
		<view class="prefer-title">为你优选</view>
		<view class="content">
			<scroll-view scroll-x="true" class="scroll">
				<view class="box" v-for="(item,index) in predata" :key="index">
					<image class="images" :src="item.url"></image>
					<view>{{item.content}}</view>
					<view>{{item.unixtime}}</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			predata:Array
		},
		data() {
			return {
				preferdata:[
					{
						'image':'https://fc3tn.baidu.com/it/u=3395213213,1325220993&fm=202&src=bqdata',
						'title':'特别推荐',
						'lable':'晚餐必备'
					},
					{
						'image':'https://fc3tn.baidu.com/it/u=3395213213,1325220993&fm=202&src=bqdata',
						'title':'特别推荐1',
						'lable':'晚餐必备1'
					},
					{
						'image':'https://fc3tn.baidu.com/it/u=3395213213,1325220993&fm=202&src=bqdata',
						'title':'特别推荐2',
						'lable':'晚餐必备2'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
 .content {
        margin:30upx 0 ;
    }
    .scroll {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
    .box {
        display: inline-block;
        width: 300upx;
        height: 300upx;
		padding: 0 8upx;
    }
	.box view:nth-child(2){
		font-size: 30upx;
		text-overflow:ellipsis;
		overflow:hidden; 
		white-space:nowrap; 
	}
	.box view:nth-child(3){
		font-size: 27upx;
		color: #9c9c9c;
	}
    .box:last-child {
        margin-right: 0;
    }
    .images{
        width: 300upx;
        height: 300upx;
        border-radius: 8upx;
    }
</style>
