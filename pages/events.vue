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
    }
  }
}
</script>

<style>

</style>