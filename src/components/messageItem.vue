<template>
	<div v-if="item.type=='red'" class="message-wrap">
		<div class="redbag-info1">
			<p style="color:#333;">{{item.grabnickname}} 领取了 <span style="color:red;">{{item.nickname}}</span> 的红包获得 <span style="color:red;">{{item.context}}元</span></p>
		</div>
	</div>
	<div v-else-if="item.type=='message'" class="message-tail message" :class="[item.senttype=='sent'?'message-sent':'message-received',item.mtype=='system'?'message-system':'',item.mtype=='customer'?'message-teacher':'',item.mtype=='manage'?'message-manage':'',item.mtype=='redpacket'?'message-redpacket':'']">
		<div class="message-avatar-box">
			<div class="message-avatar" :style="'background:url('+imgUrl+'images/avatar/'+item.avatar+');background-size:cover;background-position:center;'"></div>
			<div class="message-grade">
				<img v-if="item.grade && item.flag == 1" :src="imgUrl+'images/grade/'+item.grade+'.png'">
				<img v-else :src="imgUrl+'images/role/2.png'">
			</div>
		</div>
		<div class="message-content">
			<div class="message-name">{{item.nickname}} {{item.time|dateFormat('hh:mm:ss')}}</div>
			<div class="message-bubble" v-if="item.mtype=='redpacket'">
				<div class="redbag-top" @click="GrabRedClick(item.context.redpacketid,item.context.remarks)">
					<div class="fl">
						<img :src="imgUrl+'/images/hongbao.png'">
					</div>
					<div class="fl ml10 blue">
						<p class="title">{{item.context.remarks}}</p>领取红包
					</div>
				</div>
				<div class="under-title">直播室红包</div>
			</div>
			<div class="message-bubble" v-else>
				<div class="message-text" v-html="item.context"></div>
			</div>
		</div>
	</div>
	
</template>
<script>
	import Constants from '@/utils/constants'
	import Util from '@/utils/util'
	import Red from '@/api/redbag'
	export default{
		props:['item'],
		name:'message-item',
		data(){
			return {
				chatUrl:Constants.chatUrl,
      			imgUrl:Constants.staticUrl,
      			redItem:{
      				remarks:'恭喜发财,大吉大利！'
      			}
			}
		},
		watch:{

		},
		mounted(){
			
		},
		computed:{

		},
		methods:{
			GrabRedClick(id,remarks){
				this.redItem.redpacketid = id;
				this.redItem.remarks = remarks;
				// this.openRedSubmit();
				Red.getStutas({
					redpacketId: id
				}).then(
					res => {
						let status = res.data.status;
						console.log(status)
						this.$store.commit('UPDATE_ID', id);
						if(status === 1) {
							// this.grabRedModal = true;
							this.$store.commit('UPDATE_STD', '1');
							
							// this.grabIn = 1;
						} else if(status === 2) {
							// Red.getDetail({
							// 	redpacketId: id
							// }).then(
							// 	res => {
							// 		this.redData = res.data;
							// 		this.grabRedModal = true;
							// 		this.redRecordType = 1;						
							// 		// this.openAll();
							// 	}
							// )
							this.$store.commit('UPDATE_STD', '2');
						} else if(status === 3) {
							this.$store.commit('UPDATE_STD', '3');
						}
						
				})
			},
		}
	}
</script>