<template>
  <div id="app">
  	<transition name="page" v-on:before-enter="beforePageEnter">
    	<router-view/>
	</transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  methods:{
  	beforePageEnter(el){
  		
  	}
  }
}
</script>

<style>
</style>
