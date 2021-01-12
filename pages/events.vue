<template>
  <div>
      <events-child @onSuccess="onSuccess"  ></events-child>
  </div>
</template>

<script>
import EventsChild from '../components/EventsChild.vue'
export default {
  components: { EventsChild },
  methods:{
    onSuccess(param){
      console.log('success',param);
    },
    busHandler(){
      console.log(param);
    }
  },
  mounted(){
    this.$nuxt.$on('onDelete',this.busHandler)
  },
  beforeDestroy(){
    this.$nuxt.$off('onDelete',this.busHandler)
  }
}
</script>

<style>

</style>