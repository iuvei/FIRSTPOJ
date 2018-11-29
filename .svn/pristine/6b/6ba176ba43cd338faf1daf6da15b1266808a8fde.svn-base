<template>
		<div id="ifm" >
			<iframe 
				id="iframe"
				width="100%" 
				height="100%" 
				:src="betSrc" 
				frameborder="0">
				</iframe>
		</div>
</template>
<script>
	import Constants from '@/utils/constants'
	import Util from '@/utils/util'
	import '@/assets/css/redbag.less'
	export default{
		name:'Bet',
		data() {
			return {
				chatUrl:Constants.chatUrl,
				imgUrl:Constants.staticUrl,
				betSrc: 'http://klk2018.com/m',
				loadingBg: true
			}
		},
		watch:{

		},
		created() {
			this.Loading()
		},
		mounted() {
			let ifm = document.getElementById('ifm');
			let hei = window.innerHeight;
			ifm.style.height = hei - 92 +'px'
		},
		computed:{

		},
		methods:{
			Loading() {
				$loading.show('拼命加载中..');
				setTimeout(() => {
					$loading.hide()
				}, 2000)
			}
		}
	}
</script>