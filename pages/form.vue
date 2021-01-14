<template>
  <div>
      <h1>form</h1>
      <label>firstName : </label>
      <input type="text" v-model="firstName" />
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            firstName:''
        }
    },
    watch:{
        firstName(value){
            console.log('first name' , value);
        }
    }
}
</script>

<style>

</style>