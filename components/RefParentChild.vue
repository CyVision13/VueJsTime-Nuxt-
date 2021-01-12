<template>
  <div>
      <p>ref-parent-child</p>
      <button @click="count++">count({{count}})</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        reset(){
            this.count=0
        }
    }
}
</script>

<style>

</style>