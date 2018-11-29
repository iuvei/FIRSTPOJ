<template>
	<div class="smile-context">
        <ul style="overflow: hidden; height: 192px;">
          <li v-for="(item,index) in realList" @click="selectFace(nameList[index])">
            <img width="27" height="27" :src="item"/>
          </li>
        </ul>
      </div>
</template>
<script>
	import Constants from '@/utils/constants'
  import Util from '@/utils/util'
  import emojiData from '@/assets/js/emojidata.js'
  	export default {
  		name:'smile',
  		data() {
  			return{
  				chatUrl:Constants.chatUrl,
          imgUrl:Constants.staticUrl,
          realList: [],
          nameList: [],
          faceList:[
            {images:'yw_thumb.gif',datatxt:'[疑问]'},
            {images:'yhh_thumb.gif',datatxt:'[右哼哼]'},
            {images:'zhh_thumb.gif',datatxt:'[左哼哼]'},
            {images:'x_thumb.gif',datatxt:'[嘘]'},
            {images:'wq_thumb.gif',datatxt:'[委屈]'},
            {images:'tza_thumb.gif',datatxt:'[可爱]'},
            {images:'tootha_thumb.gif',datatxt:'[大笑]'},
            {images:'t_thumb.gif',datatxt:'[吐]'},
            {images:'sweata_thumb.gif',datatxt:'[流汗]'},
            {images:'sw_thumb.gif',datatxt:'[失望]'},
            {images:'smilea_thumb.gif',datatxt:'[呵呵]'},
            {images:'sleepya_thumb.gif',datatxt:'[困]'},
            {images:'sleepa_thumb.gif',datatxt:'[睡觉]'},
            {images:'sk_thumb.gif',datatxt:'[思考]'},
            {images:'shamea_thumb.gif',datatxt:'[害羞]'},
            {images:'sb_thumb.gif',datatxt:'[生病]'},
            {images:'sada_thumb.gif',datatxt:'[泪]'},
            {images:'qq_thumb.gif',datatxt:'[亲亲]'},
            {images:'nm_thumb.gif',datatxt:'[怒骂]'},
            {images:'money_thumb.gif',datatxt:'[钱]'},
            {images:'mb_thumb.gif',datatxt:'[大开心]'},
            {images:'lovea_thumb.gif',datatxt:'[爱你]'},
            {images:'ldln_thumb.gif',datatxt:'[懒得理你]'},
            {images:'laugh.gif',datatxt:'[哈哈]'},
            {images:'kl_thumb.gif',datatxt:'[可怜]'},
            {images:'kbsa_thumb.gif',datatxt:'[挖鼻屎]'},
            {images:'k_thumb.gif',datatxt:'[打哈欠]'},
            {images:'hsa_thumb.gif',datatxt:'[花心]'},
            {images:'heia_thumb.gif',datatxt:'[偷笑]'},
            {images:'hatea_thumb.gif',datatxt:'[哼]'},
            {images:'h_thumb.gif',datatxt:'[无语]'},
            {images:'gza_thumb.gif',datatxt:'[鼓掌]'},
            {images:'angrya_thumb.gif',datatxt:'[怒]'},
            {images:'88_thumb.gif',datatxt:'[拜拜]'},
            {images:'44.gif',datatxt:'[示爱]'},
            {images:'bz_thumb.gif',datatxt:'[闭嘴]'},
            {images:'cool_thumb.gif',datatxt:'[酷]'},
            {images:'cry.gif',datatxt:'[衰]'},
            {images:'vw_thumb.gif',datatxt:'[威武]'},
            {images:'unheart.gif',datatxt:'[心碎]'},
            {images:'good_thumb.gif',datatxt:'[赞]'},
            {images:'ok_thumb.gif',datatxt:'[ok]'},
          ]
  			}
      },
      created() {
        for(let i in emojiData.allEmoji) {
          this.nameList.push(i);
          this.realList.push(emojiData.allEmoji[i])
        }
      },
      mounted(){

      },
      methods:{
        selectFace(item){
          console.log(item)
          this.$emit("defaultFaceChange", item);
        }
      }
  	}
</script>