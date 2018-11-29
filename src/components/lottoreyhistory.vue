<template>
<div>
 <von-header theme="lights" :fixed="true" class="lottorey">

          <span slot="left" class="button button-icon" @click="back()">
            <div class="icon ion-ios-contact"></div>
          </span>
        <span slot="title">开奖历史</span>
      </von-header>


    <div class="scroll-content has-header">
      <div class="row play-container" >
        <img src="../assets/images/login-password.png" alt="">
        <div class="row">
          <div class="col play-left-item">
            <p>北京赛车</p>
            <span>20181105039</span>
        </div>
        <div class="col play-left">
              <div >
                  官方开奖
            </div>
          </div>
        <div class="col play-right">
            <p>开奖倒计时</p>
            <span>01:25</span>
          </div>
        </div>


    </div>
    <ul class="list lottorey-lists">
        <li class="item row lottorey-list">
               <div class="col lottorey-container-left">
            <span class="lottorey-top-left">
              20181105039
              </span>
            <div class=" lottorey-blow-right">
              <span class="blow">
                   01
              </span>
              <span class="blow">
                   01
              </span>
              <span class="blow">
                   01
              </span>
              <span class="blow">
                   01
              </span>
              <span class="blow">
                   01
              </span>

            </div>
        </div>
        <div class="col lottorey-container-right">2018-11-05 15:01:25 </div>
        </li>
    </ul>
    </div>
  <div  class="tabbar moveBottom visible fixed">
        <a class="link" @click="gohistory()">
          <div slot="title">去购彩</div>
        </a>
  </div>
</div>



</template>


<script>
import '../assets/css/history.less'
import Constants from '@/utils/constants'
import Util from '@/utils/util'
import KJ from '@/api/lottery'
export default {
  name:'LotteryHistory',
  props: {
        title: String,
      theme: String,
      destroyOnHide: Boolean,
      onHide: Function,
    },

    data() {
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
			// this.initData();
  console.log(this.onHide);
  this.initData();

		},
    destroyed() {

    },

    methods: {
      back() {
        window.history.go(-1)
      },

      gohistory() {

        },
      initData() {
				if(this.sign === 12) {
					return false
				} else {
					KJ(this.sign).then(
						res => {
              console.log(res.data.xqkjsj);
						}
					)
				}
			},
      }
}
</script>


