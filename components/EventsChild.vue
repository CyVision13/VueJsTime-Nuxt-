<template>
  <div>
      <events-child-nested></events-child-nested>
      <hr>
      <p>events child</p>
      <button @click="submit">submit</button>
  </div>
</template>

<script>
import EventsChildNested from './EventsChildNested.vue'
export default {
  components: { EventsChildNested },
    methods:{
        submit(){
            setTimeout(()=>{
                this.$emit('onSuccess','my custom param')
            },1000)
        }
    }
}
</script>

<style>

</style>