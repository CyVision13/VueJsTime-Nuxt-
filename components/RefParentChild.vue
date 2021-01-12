<template>
  <div>
      <p>ref-parent-child</p>
      <button @click="count++">count({{count}})</button>
      <button @click="updateParent">update parent</button>
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
        },
        updateParent(){
            this.$parent.parentCount++
        }
    }
}
</script>

<style>

</style>