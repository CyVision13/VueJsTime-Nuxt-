<template>
  <div>
      deep button 
      <button @click="submit">click from deep component</button>
  </div>
</template>

<script>
export default {
    methods:{
        submit(){
            setTimeout(()=>{
                this.$nuxt.$emit('onDelete','delete param')
            },1000)
        }
    }
}
</script>

<style>

</style>