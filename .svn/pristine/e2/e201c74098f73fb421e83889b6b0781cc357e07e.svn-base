<template>
	<keep-alive>
	<div class="lottery">
		<div 
			class="right-container">
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/pk10.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>北京赛车 当前{{dqqs[0]}}期</p>
							<p>下期开奖:{{times[0]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[0]"
								:key="index"
								:class="'pk10-bg-'+item">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/xyft.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>幸运飞艇 当前{{dqqs[2]}}期</p>
							<p>下期开奖:{{times[2]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[2]"
								:key="index"
								:class="'pk10-bg-'+item">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/cqssc.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>重庆时时彩 当前{{dqqs[5]}}期</p>
							<p>下期开奖:{{times[5]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								style="background: #ff7600"
								v-for="(item, index) in dqhm[5]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/jsk3.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>江苏快三 当前{{dqqs[3]}}期</p>
							<p>下期开奖:{{times[3]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[3]"
								:key="index"
								:class="'jsk3-bg-'+item"></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/gdkl10.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>广东快乐十分 当前{{dqqs[1]}}期</p>
							<p>下期开奖:{{times[1]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								style="background: #237c7d; border-radius: 50%;"
								v-for="(item, index) in dqhm[1]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				
				
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/xync.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>幸运农场 当前{{dqqs[4]}}期</p>
							<p>下期开奖:{{times[4]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								style="border-radius: 50%"
								v-for="(item, index) in dqhm[4]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/gd11x5.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>广东快乐十分 当前{{dqqs[6]}}期</p>
							<p>下期开奖:{{times[6]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[6]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/jx11x5.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>江西十一选5 当前{{dqqs[7]}}期</p>
							<p>下期开奖:{{times[7]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								style="background: #237c7d"
								v-for="(item, index) in dqhm[7]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/xjssc.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>新疆时时彩 当前{{dqqs[8]}}期</p>
							<p>下期开奖:{{times[8]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								style="border-radius: 50%; background: #ff7600"
								v-for="(item, index) in dqhm[8]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/tjssc.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>天津时时彩 当前{{dqqs[9]}}期</p>
							<p>下期开奖:{{times[9]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[9]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="items-container">
					<div class="logo-can">
						<img :src="imgUrl+'images/lottery-logo/kl8.png'" alt="">
					</div>
					<div class="other-can">
						<div class="other-title">
							<p>快乐8 当前{{dqqs[10]}}期</p>
							<p>下期开奖:{{times[10]}}</p>
						</div>
						<div class="nums-container">
							<ul>
								<li
								v-for="(item, index) in dqhm[10]"
								:key="index"
								class="blue-defult">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
	</div>
	</keep-alive>
</template>
<script>
	import Constants from '@/utils/constants'
	import Util from '@/utils/util'
	import KJ from '@/api/lottery'
	import '@/assets/css/tab.less'

	export default{
		name:'Lottery',
		data(){
			return {
				chatUrl:Constants.chatUrl,
				imgUrl:Constants.staticUrl,
				sign: 0,
				dqhm: [],
				dqqs: [],
				times: [],
				isP: [],
			}
		},
		watch:{

		},
		created() {
			this.initData();
			for(let i=0;i<12;i++) {
				this.isP.push(true);
			}
			
		},
		mounted(){
			
		},
		computed:{

		},
		methods:{
			reGetData(index) {
				if(index === 0) {
					this.bjsc()
				} else if (index === 5) {
					this.cqssc()
				}
				KJ(index).then(
					res => {
						this.dqhm.splice(index, 1, res.data.dqhm);
						this.dqqs.splice(index, 1, res.data.dqqs)
						this.countDown({
							xqkjsj: res.data.xqkjsj,
							timestamp: res.timestamp,
							num: index
						})
					}
				)
			},
			countDown(data) {
				let localTimer = data.timestamp;
				let otherClick;
				let timer = Math.ceil((data.xqkjsj - localTimer)/1000);
				if(timer === 0||timer < 0) {                                       	
					otherClick = setTimeout(() => { 
						this.reGetData(data.num)
					},5000);
				} else {
					clearTimeout(otherClick);
					let min = Math.floor(timer/60);
					let scd = Math.ceil(timer%60);
					let click = setInterval(
						() => {
							scd --;
							if(((min === 0||min === '00')&&scd === 0)||min <0) {
								clearInterval(click);
								this.times.splice(data.num, 1, '开奖中...');
								this.reGetData(data.num);
							} else {
								if(scd < 0) {
									min --;
									scd = 59;
								}
								if((min+'').length === 1) {
									min = '0' + min
								}
								if((scd+'').length === 1) {
									scd = '0' + scd
								}
								this.times.splice(data.num, 1, min+':'+scd);
							}
						}
					,1000);
				}
			},
			initData() {
				if(this.sign === 12) {
					return false
				} else {
					KJ(this.sign).then(
						res => {
							this.dqhm.push(res.data.dqhm);
							this.dqqs.push(res.data.dqqs);
							this.countDown({
								xqkjsj: res.data.xqkjsj,
								timestamp: res.timestamp,
								num: this.sign
							})
							this.sign++;
							this.initData()
						}
					)
				}
			},
		}
	}
</script>
