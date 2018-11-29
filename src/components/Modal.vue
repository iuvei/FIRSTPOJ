<template>
  <div von-modal class="modal-backdrop"
    :class="{'active': state > 0, 'hide': state == 0}">
    <div class="modal-backdrop-bg"></div>
    <div class="modal-wrapper">
      <div class="modal slide-in-up" :class="{
        'active': state == 1,
        'ng-enter ng-enter-active active': state == 2,
        'ng-leave ng-leave-active': state == 3,
      }">
        <slot name="header">
          <div v-if="title" class="bar bar-header"
            :class="{
              'bar-assertive': theme == 'assertive',
              'bar-positive': theme == 'positive',
              'bar-balanced': theme == 'balanced',
              'bar-energized': theme == 'energized',
              'bar-calm': theme == 'calm',
              'bar-royal': theme == 'royal',
              'bar-stable': theme == 'stable',
              'bar-dark': theme == 'dark',
              'bar-dafault': theme == 'default'
            }"
          >
            <h1 class="title" v-text="title"></h1>
            <button class="button button-icon icon ion-ios-close-empty" @click="hide()"></button>
          </div>
        </slot>
        <div class="modal-content">
        	<slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const show_modal_animate_dur = 400
  const hide_modal_animate_dur = 250

  export default {
    props: {
      title: String,
      theme: String,
      destroyOnHide: Boolean,
      onHide: Function,
      
    },

    data() {
      return {
        state: 0
      }
    },

    destroyed() {
      this.$el.parentNode.removeChild(this.$el)
    },

    methods: {
      show() {
        this.state = 1
        setTimeout(() => {
          this.state = 2

          this.$root.eventHub.$emit('ModalSlideUpStart')
          setTimeout(() => {
            this.$root.eventHub.$emit('ModalSlideUpEnd')
          }, show_modal_animate_dur)
        }, 50)
        document.body.classList.add('modal-open')
      },

      hide() {
        if (this.onHide) {
          this.onHide()
        }

        this.state = 3
        setTimeout(() => {
          this.state = 0

          if (this.destroyOnHide) {
            this.$destroy()
          }
        }, hide_modal_animate_dur)
        document.body.classList.remove('modal-open')
      }
    }
  }
</script>
