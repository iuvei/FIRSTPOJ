<template>
	<div class="live">
		<accordion>
			<accordion-item title="北京赛车开奖直播" contentHeight="2580">
				<div class="live-container">
					<div class="iframe-container">
						<iframe 
						width="100%"
						height="220"
						src="https://kjzb.com/static/wap/assets/dist/vendor/mobile/pk102/index.html" frameborder="0"></iframe>
					</div>
					<div class="kaijiang-container">
						<div class="kjhead-can">
							<div class="little-can">
								<p>期数</p>
							</div>
							<div style="padding: " class="little-can">
								<p>时间</p>
							</div>
							<div class="little-can">
								<ul>
									<li 
									@click="bjscTab(index)"
									:class="{on: index === isOn}"
									v-for="(item, index) in title" 
									:key="index">
										<span>{{item}}</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="kjbody-can">
							<div 
							v-for="(item, index) in bjscData" 
							:key="index"
							class="bd-can">
								<div style="width: 76px" class="little-bd-can">
									<p style="font-size: 12px">{{item.periods}}</p>
								</div>
								<div style="padding: 0px; width: 110px" class="little-bd-can">
									<p style="font-size: 12px">{{timers(item.starttime, 'MM-dd hh:mm')}}</p>
								</div>
								<div style="padding: 0px; " class="little-bd-can">
									<ul>
										<li 
										style="font-size: 12px; width: 17px; height: 16px; line-height: 17px"
										v-if="!isDz"
										v-for="(items, indexes) in item[changeBjsc]"
										:key="indexes"
										:class="[
											'pk10-bg-'+items, 
											{
												'pk10-bg-4': items === '大'||items === '单', 
												'pk10-bg-6': items === '小'||items === '双'
											}]">{{items}}</li>
										<li 
										style="width: 17px;line-height: 16px;height: 16px;"
										v-if="isDz"
										v-for="(items, indexes) in item[changeBjsc]"
										:key="indexes"
										:class="bjscData[index].dzrank[indexes] === 1?'pk10-bg-'+(indexes+1):''">{{items}}</li>	
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</accordion-item>

			<accordion-item title="重庆时时彩开奖直播" contentHeight="2600">
				<div class="live-container">
					<div class="iframe-container">
						<iframe 
						width="100%"
						height="220"
						src="https://kjzb.com/static/wap/assets/dist/vendor/mobile/cqssc/live.html" frameborder="0"></iframe>
					</div>
					<div class="kaijiang-container">
						<div class="kjhead-can">
							<div class="little-can"><p>期数</p></div>
							<div class="little-can"><p>时间</p></div>
							<div class="little-can">
								<p style="position: relative; left: 155%;">开奖号码</p>
							</div>
						</div>
						<div 					
						class="kjbody-can">
							<div 
							v-for="(item, index) in sscData" 
							:key="index"
							class="bd-can">
								<div class="little-bd-can">
									<p>{{item.periods.substr(8, 3)}}</p>
								</div>
								<div style="width: 28%;" class="little-bd-can">
									<p>{{timers(item.starttime, 'MM-dd hh:mm')}}</p>
								</div>
								<div style="padding-left: 14%" class="little-bd-can">
									<ul>
										<li 
										v-for="(items, indexes) in item[changeSsc]"
										:key="indexes"
										class="ssc-num">{{items}}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</accordion-item>
		</accordion>
	</div>
</template>
<script>
	import Constants from '@/utils/constants'
	import Util from '@/utils/util'
	import KJ from '@/api/kaijiang'
	import '@/assets/css/tab.less'
	export default{
		name:'Live',
		data() {
			return {
				chatUrl:Constants.chatUrl,
				imgUrl:Constants.staticUrl,
				sscData: [],
				bjscData: [],
				changeBjsc: 'rank',
				changeSsc: 'rank',  
				title: ['号码', '大小', '单双', '对子'],
				isOn: 0,
				isDz: false,
			}
		},
		watch:{

		},
		created() {
			console.log(Util.formatDate)
			this.cqssc();
			this.bjsc();
		},
		mounted(){
			
		},
		computed:{

		},
		methods:{
			bjscTab(index = 0) {
				this.isOn = index;
				this.isDz = false;
				if(index === 0) {
					this.changeBjsc = 'rank';
				} else if(index === 1) {
					this.changeBjsc = 'dxrank';
				} else if (index === 2) {
					this.changeBjsc = 'dsrank';
				} else if(index === 3){
					this.changeBjsc = 'rank';
					this.isDz = true;
				}
			},
			timers(time, str) {
				return Util.formatDate(new Date(time), str)
			},
			cqssc() {
				KJ.ssc().then(
					res => {
						console.log(res.data);
						this.sscData = res.data;
					}
				)
			},
			bjsc() {
				KJ.bjsc().then(
					res => {
						this.bjscData = res.data;
					}
				)
			}
		}
	}
</script>