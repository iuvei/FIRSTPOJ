<template>
	<div style="text-align: center" class="customer">
		<p style="margin-top: 100px;">已经帮您链接到客服地址</p>
	</div>
</template>
<script>
	import Constants from '@/utils/constants'
	import Util from '@/utils/util'
	export default{
		name:'Customer',
		data(){
			return {
				chatUrl:Constants.chatUrl,
      			imgUrl:Constants.staticUrl
			}
		},
		watch:{

		},
		mounted(){
			window.open('https://gzzaxc219.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=938240&configID=41445&jid=1936571624&s=1');
		},
		computed:{

		},
		methods:{

		}
	}
</script>