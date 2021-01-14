<template>
  <div>
      <h1>form</h1>
      <label>firstName : </label>
      <app-text-input v-model="firstName"></app-text-input>
      
  </div>
</template>

<script>
import AppTextInput from '../components/ui/AppTextInput.vue';

export default {
  components: { AppTextInput },
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